import React, { useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";
import jwtDecode from 'jwt-decode';

function PrivateRoute({ component: Component, ...rest }) {

  const [token, setToken] = useState("");


  function verifyToken() {
    let token = localStorage.getItem('@TOKEN')
    try {
      jwtDecode(token);
    } catch(err) {
      console.log(err)
    }

    setToken(token);
    
    if(token){
        let tokenExpiration = jwtDecode(token).exp;
        let dateNow = new Date();

        if(tokenExpiration < dateNow.getTime()/1000){
            return false;
        }else{
            return true;
        }
    } else {
        return false;
    }
  }

  function decodeToken() {
    return jwtDecode(localStorage.getItem('@TOKEN'))
  }

  return (
    <Route
      {...rest}
      render={props =>
        verifyToken() ? (
          <Component {...props} user={decodeToken()} token={token} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;