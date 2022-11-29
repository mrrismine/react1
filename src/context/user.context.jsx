import { createContext,useState,useEffect} from "react";

import { OnAuthStateChangedListener, createUserFromAuth} from "../utils/firebase.utils";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
})

export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser}
    
    useEffect(() => {
        const unSubcribe = OnAuthStateChangedListener((user) => {
            if(user) {
                createUserFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unSubcribe()
    }, [])

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}