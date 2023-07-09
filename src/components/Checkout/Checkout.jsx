import { db } from "../../services/firebase/firebaseConfig"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext } from "react" 
import { CartContext } from "../../context/CartContext"
import { useState } from "react"
import { Timestamp } from "firebase/firestore"
import CheckoutForm from "../CheckoutForm/CheckoutForm"


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore
            

            docs.forEach( doc => {
                const fieldsDoc = doc.data()
                const stockDb = fieldsDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fieldsDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()
                    
                const ordersRef = collection(db, 'orders')
                    
                const orderAdded = await addDoc(ordersRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()

            } else {
                console.error('los productos estan fuera de stock');
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se esta generando su orden</h1>
        
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }


    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout