import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

    return(
        <div className="cartas">
            <article class="card">
            <picture>
                <img src={img} class="imgPeque" alt={name}/>
            </picture>
            <div class="card-body">
                <header>
                    <h5 class="card-title">
                        {name}
                    </h5>
                </header>
                
                <section class="card-text">
                    <p>
                        Precio :${price}
                    </p>
                    <p>
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Option'>Terminar compra</Link>
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