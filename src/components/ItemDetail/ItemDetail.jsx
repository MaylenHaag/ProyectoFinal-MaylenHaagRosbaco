import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price, img, description
        }

        addItem(item, quantity)
    }

    return(
        <div className="cartas">
            <article className="card">
            <picture>
                <img src={img} className="imgPeque" alt={name}/>
            </picture>
            <div className="card-body">
                <header>
                    <h5 className="card-title">
                        {name}
                    </h5>
                </header>
                
                <section className="card-text">
                    <p>
                        Precio :${price}
                    </p>
                    <p>
                        Descripcion: {description}
                    </p>
                    <p>
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <button>
                                <Link to='/cart' className='Option'>Terminar compra</Link>
                            </button>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
                </footer>
            </div>        
        </article>
        </div>
    )
}

export default ItemDetail