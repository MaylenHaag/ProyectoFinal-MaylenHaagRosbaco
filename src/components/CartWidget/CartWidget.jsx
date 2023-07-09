import { RiShoppingCartLine } from 'react-icons/ri';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' style={{ display: totalQuantity() > 0 ? 'block' : 'none'}} className='carrito'>
            <RiShoppingCartLine />
            { totalQuantity() }
        </Link>
    )
}

export default CartWidget