import './products-preview.styles.jsx'

import ProductCard from '../productcard.component/productcard.component'
import { CategoryPreviewContainer, Preview, TitleCategory} from './products-preview.styles'

const CategoryPreview = ({title, products}) => {
    
    return(
        <CategoryPreviewContainer>
            <h2>
                <TitleCategory to={title} >{title.toUpperCase()}</TitleCategory>
            </h2>
            <Preview>
                {
                    products.length ? products
                        .filter((_, idx) => idx < 4)
                        .map((product) => (
                           <ProductCard key={product.id} product={product} /> 
                        )) : (
                            <span> Your Product is Empty</span>
                        )
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview