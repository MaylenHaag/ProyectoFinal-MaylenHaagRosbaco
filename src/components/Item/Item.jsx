import {Link} from 'react-router-dom'

const Item = ({id, name, img, price, stock, description}) => {

    return (
        <div>
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
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer>
                    <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle</Link>
                </footer>
            </div>        
        </article>
        </div>
        
    )
}

export default Item