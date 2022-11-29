import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CardContext } from '../../context/cartdropdown.context'

import { CartDropdownContainer, CartItems, EmptyMessage } from './card-dropdown.styles.jsx'
import CartItem from '../cart-item.component/cart-item.component'

const CartDropdown = () => {
    const navigate = useNavigate()
    const routeChange = () => {
        let path = '/check-out'
        navigate(path)
    }

    const {cartItems} = useContext(CardContext)
    return(
        <CartDropdownContainer>
            <CartItems>
                { cartItems.length ? (
                    cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
                    ) 
                    : (
                        <EmptyMessage> Your Cart Is Empty</EmptyMessage>
                    ) 
                } 
            </CartItems>
            <button onClick={routeChange} className='button-card'>GO TO CHECKOUT </button>
        </CartDropdownContainer>
    )
}

export default CartDropdown