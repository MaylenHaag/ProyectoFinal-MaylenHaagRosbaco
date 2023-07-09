import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = () => {
        return cart.reduce((total, prod) => total + prod.quantity, 0);
    }

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })

        return total
    }

    const total = getTotal()

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total}}>{ children }</CartContext.Provider>
    )
}
