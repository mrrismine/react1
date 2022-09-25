import '../menu.component/category-menu.styles.scss'
import CategoryItem from '../categories.component/categories-component'


const CategoryMenu = ({category}) => {

    return (
        category.map((category) => {
            return (
            <CategoryItem key={category.id} category={category}/>
            )
        })
    )
}

export default CategoryMenu