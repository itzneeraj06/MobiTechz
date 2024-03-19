import React from 'react'
import { Navigate } from 'react-router';

const PrivateRoute = ({login,children}) => {
    //login hoga toh page render hoga warna login page
  if(login){
    return children;
  }
  else{
    return <Navigate to='/login'/>
  }
}

export default PrivateRoute