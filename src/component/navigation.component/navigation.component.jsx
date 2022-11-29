import { Fragment,useContext } from "react"
import { Outlet } from "react-router-dom"

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { UserContext } from "../../context/user.context"
import { SignOutUser } from "../../utils/firebase.utils"
import { CardContext } from "../../context/cartdropdown.context"

import ShoppingIcon from "../cart-icon.component/cart-icon.component"
import CartDropdown from "../card-dropdown.component/card-dropdown.component"
import {NavLinkContainer, NavLink, NavigationStyle, LogoContainer} from './navigation.styles'
import Footer from "../footer/footer.component"

import '../navigation.component/navigation.styles.jsx'

const Navigation = () => {
    const { currentUser,setCurrentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CardContext)

    const signOutUserHandler = async(event) => {
      event.preventDefault()
      await SignOutUser()
      setCurrentUser(null)
    }

    return(
      <Fragment>
        <NavigationStyle>
            <LogoContainer to={'/'}>
                <CrownLogo />
            </LogoContainer>
            <NavLinkContainer>
                <NavLink to={'/shop'}>
                    
                        Shop
                    
                </NavLink>
                {
                  currentUser ? (<NavLink onClick={signOutUserHandler}>Sign Out</NavLink>)
                  :
                  (
                    <NavLink to={'/sign-in'}>
                    
                        Sign In
                    
                </NavLink>
                  )
                }
              <ShoppingIcon />     
            </NavLinkContainer>
            { isCartOpen && <CartDropdown /> }
        </NavigationStyle>
        <Outlet/>
        <Footer/>
      </Fragment>
      
    )
  }

export default Navigation
  