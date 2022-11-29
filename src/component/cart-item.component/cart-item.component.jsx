import '../cart-item.component/cart-item.styles.scss'

const CartItem = ({cartItem}) => {
    const {name,quantity,price, imageUrl} = cartItem
    return(
        <div className='cart-item-container'>
            <img alt={name} src={imageUrl} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span>{quantity} x {price}</span>
            </div>
        </div>
    )
}

export default CartItem