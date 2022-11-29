import '../checkout-item.component/checkout-item.styles.scss'
import CheckOutItemDetail from '../checkout-itemdetail/checkout-itemdetail.component'

import { useContext } from "react"

import { CardContext } from "../../context/cartdropdown.context"

const CheckOutItem = () => {
    const {cartItems, totalPrice} = useContext(CardContext)
 
    return (
        
        <div className="checkout-container">
            <div className="checkout-header">
            <div className="header-block">
               <span>Product</span>  
            </div>
            <div className="header-block">
              <span>Description</span>  
            </div>
            <div className="header-block">
              <span>quantity</span>  
            </div>
            <div className="header-block">
              <span>Price</span>  
            </div>
            <div className="header-block">
              <span>Remove</span>  
            </div>

        </div>
            {cartItems.map((cartItem) => (
            <CheckOutItemDetail key={cartItem.id} cartItem={cartItem} />
            ))}
        <span className='total'>TOTAL : $ {totalPrice}</span>
        
        </div>
    )
}

export default CheckOutItem