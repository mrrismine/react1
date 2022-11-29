import {Routes, Route} from 'react-router-dom'

import './shoppage.styles.scss'

import ShopPagePreview from '../shoppage-preview/shoppage-preview.component'
import Category from '../category/category.component'


const Shop = () => {
    return (
        <Routes>
            <Route index element={<ShopPagePreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop