import React, { useState, useEffect } from 'react';
import decode from "jwt-decode";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";

const ProtectedRoute = ({ children: child, history,...rest }) => {

  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const verifyToken = () => {
    const token = localStorage.getItem('@TOKEN');
    
    try {
      console.log(token)
      const decoded = decode(token);
      setUser(decoded);
      console.log(decoded);
    } catch(err) {
      console.log("asdasdasdasdasd")
      console.log(err);
      return false;
    }
    console.log(true);

    setToken(token)
    return true;
  }

  useEffect(() => {
    if(!verifyToken()) {
      history.push('/')
    }
  }, [])

  return (
    <Route {...rest} />

  )
}

export default ProtectedRoute;