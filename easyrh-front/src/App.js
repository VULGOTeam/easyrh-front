import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import './App.css';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import OTP from './pages/OTP/OTP';
import Dashboard from './pages/Dashboard/Dashboard';

//useParams();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">      
          <Login />
        </Route>
        <Route path="/cadastro">      
          <Cadastro />
        </Route>
        <Route path="/OTP">      
          <OTP />
        </Route>
        <Route path="/dashboard">      
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
