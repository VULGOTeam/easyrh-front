import { Form, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OTP.js";
import AuthenticationService from '../../services/AuthenticationService'
import { useState, useEffect } from "react";
import {  withRouter } from "react-router-dom";
import { toast } from 'react-toastify';

const OTP = (props) => {

  localStorage.clear()

  return (
    <div></div>
  )
};

export default withRouter(OTP);
