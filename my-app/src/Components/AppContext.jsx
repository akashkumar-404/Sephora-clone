import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

  export const AuthContext=React.createContext()
  function AuthContextProvide({children}){
    const [isAuth,setAuth]=useState(false)
    const[email,setEmail]=useState("")
    const[token,setToken]=useState(null)
    const navigate=useNavigate()


    const loginUser=(email,token)=>{
      setAuth(true)
      setEmail(email)
      setToken(token)
        navigate("/")
    }
    
    return <AuthContext.Provider value={{isAuth,email,token,loginUser}}>{children}</AuthContext.Provider>
  }
  export default AuthContextProvide