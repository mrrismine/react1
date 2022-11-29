import '../checkout-itemdetail/checkout-itemdetail.styles.scss'

import { useContext } from 'react'

import { CardContext } from '../../context/cartdropdown.context'

const CheckOutItemDetail = ({cartItem}) => {
    const {price,name,imageUrl,quantity} = cartItem
    const {deleteItemFromCart, removeItemFromCart,addItemToCart} = useContext(CardContext)

    const deleteHandler = () => deleteItemFromCart(cartItem)
    const decrementHandler = () => removeItemFromCart(cartItem)
    const incrementHandler = () => addItemToCart(cartItem)

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <div className='name'> {name}</div>
            <div className='price'> {price}</div>
            <div className='quantity'>
                <div className='arrow' onClick={decrementHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity} </span>
                <div className='arrow' onClick={incrementHandler}>
                    &#10095;
                </div>
            </div>
            <div className='remove-button' onClick={deleteHandler}>&#10005;</div>
        </div>
    )
}

export default CheckOutItemDetail