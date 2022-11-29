import { createContext, useState, useEffect} from 'react'

import { addCollectionProduct, getCategoriesProduct } from '../utils/firebase.utils'

import SHOP_DATA from '../shop_data/shop-data.js'

export const CategoryContext = createContext({
    categoryMap : {}
})

export const CategoryProvider = ({children}) => {
    const [categoryMap,setCategoryMap] = useState({})

    useEffect(() => {
        const getCategoryProduct = async () => {
            const getCategory = await getCategoriesProduct()
            console.log(getCategory)
            setCategoryMap(getCategory)
        }
        getCategoryProduct()
    }, [])

    const value = {categoryMap}

    return ( <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>)
}