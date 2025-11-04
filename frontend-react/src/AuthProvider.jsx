// eslint-disable-next-line no-unused-vars
import {useState,useContext} from 'react'

// Create the Context:
// eslint-disable-next-line no-undef
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(
       !!localStorage.getItem('accessToken')
    )
  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};