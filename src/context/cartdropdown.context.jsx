import { createContext,useEffect,useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity +1}
            : cartItem
        )     
    }

    return [...cartItems, {...productToAdd, quantity:1}]
}

const deleteCartItem = (cartItems, productToDelete) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToDelete.id
        )
    if(existingCartItem) {
            return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id)
        }
    
    return cartItems.map((cartItem) => {
        return {...cartItem}
    }
    )
}

const removeCartItem = (cartItems,productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
        )
        
    if(existingCartItem.quantity === 1) {
            return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
        }
        
    return cartItems.map((cartItem) => 
        cartItem.id === productToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity -1}
        : cartItem
    )
}

export const CardContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart : () => {},
    deleteItemFromCart: () => {},
    cartCount : 0,
    totalPrice : 0,

})

export const CardProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        )
        setCartCount(newCartCount)
    },[cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        )
        setTotalPrice(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
        console.log(cartItems)
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems,productToRemove))
        console.log(cartItems)
    }

    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems,productToDelete))
        console.log(cartItems)
    }

    const value = {isCartOpen,setIsCartOpen,addItemToCart, cartItems,cartCount,removeItemFromCart, deleteItemFromCart, totalPrice}     
 
    return (
        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    )
}