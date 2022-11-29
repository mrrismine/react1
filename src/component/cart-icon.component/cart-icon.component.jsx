import { useContext } from 'react'

import {ReactComponent as ShoppingIconSVG} from '../../assets/shopping-bag.svg'
import { CardContext } from '../../context/cartdropdown.context'

import '../cart-icon.component/cart-icon.styles.scss'


const ShoppingIcon = () => {
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CardContext)

    const toogleCartOpen = () => setIsCartOpen(!isCartOpen)

    return(
        <div className='cart-icon-container' onClick={toogleCartOpen}>
            <ShoppingIconSVG className='shopping-icon'/>
            <span>{cartCount}</span>
        </div>
    )
}

export default ShoppingIcon