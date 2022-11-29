import { useContext } from 'react'

import { CardContext } from '../../context/cartdropdown.context'

import '../productcard.component/productcard.styles.scss'

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product
    const {addItemToCart} = useContext(CardContext)

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <button onClick={addProductToCart} className=''>Add To Card</button>
        </div>
    )
}

export default ProductCard