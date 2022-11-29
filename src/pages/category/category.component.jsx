import { useState, useContext, useEffect } from 'react'

import { CategoryContext } from '../../context/category.context'

import ProductCard from '../../component/productcard.component/productcard.component'

import { useParams } from 'react-router-dom'

import {DirectoryCategory,Title} from './category-styles.jsx'

const Category = () => {
    const {category} = useParams()
    const {categoryMap} = useContext(CategoryContext)
    const [products, setProducts] = useState(categoryMap[category])

    useEffect(() => {
        setProducts(categoryMap[category])
    },[category, categoryMap])

    // console.log(products)
    // console.log(categoryMap[category])
    return(
        <>
            <Title> {category.toUpperCase()}</Title>
            <DirectoryCategory>
                { products && 
                    products.map((product) => <ProductCard key={product.id} product={product}/>
                    )}
                
            </DirectoryCategory>

        </>
    )
}

export default Category