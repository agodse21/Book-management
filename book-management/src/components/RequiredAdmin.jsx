import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const RequireAdmin = ({children}) => {
 const admin=useSelector((state)=>state.AuthReducer.isAdmin)
 const location =useLocation();
 
 if(!admin){
return <Navigate  to="/login" replace state={{data:location.pathname,}} />
 }
    return children
  
}
