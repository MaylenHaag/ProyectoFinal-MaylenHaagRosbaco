import {Link} from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {

    return (
        <div>
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
                    <Link to={`/item/${id}`} className='Option'
                    class="btn btn-primary">Ver detalle</Link>
                </footer>
            </div>        
        </article>
        </div>
        
    )
}

export default Item