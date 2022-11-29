import { useContext } from "react"

import { CategoryContext } from "../../context/category.context"
import CategoryPreview from "../../component/products-preview/products-preview.component"

import '../shop/shoppage.styles.scss'

const ShopPagePreview = () => {
    const {categoryMap} = useContext(CategoryContext)

    return(
        <div className="shop-preview-container">
            {
                Object.keys(categoryMap).map((title) => {
                    const products = categoryMap[title]
                    return <CategoryPreview key={title} products={products} title={title} />
                })
                
            }
        </div>
    )
}

export default ShopPagePreview