import { Form, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OTP.js";
import AuthenticationService from '../../services/AuthenticationService'
import React, { useState, useEffect } from "react";
import {  withRouter } from "react-router-dom";
import { toast } from 'react-toastify';
 
const OTP = (props) => {
  const authenticationService = new AuthenticationService()

  const [otp, setOtp] = useState("");

  useEffect(() => {
    console.log(props);
  }, []);

  const voltar = async e => {
      e.preventDefault()
      props.history.push({
        pathname: '/',
    })
  }

  const  valida = async (e) => {
    e.preventDefault()

    try {
        const { data: response } = await authenticationService.verifyOtp(props.location.state.email, otp)
        console.log(response)

        localStorage.setItem("@TOKEN", response?.token)
        localStorage.setItem("@USER", JSON.stringify(response?.user))

        props.history.push({
            pathname: "/dashboard",
            state: {email: response?.user.email, name: response?.user.name, cnpj: response?.user.cnpj },
        });

    } catch(error) {
        toast(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

  };

  return (
    <div className="box">
      <div className="logo-header">
        <h1>EasyRH </h1>
      </div>
      <Form className="m-lateral">
        <Form.Group className="centro">
          <Form.Label>CÓDIGO DE ACESSO</Form.Label>
          <Form.Control type="text" placeholder="" onChange={(e) => setOtp(e.target.value)} />
          <Form.Text className="text-muted">
            Utilize seu código de acesso recebido no e-mail
          </Form.Text>
        </Form.Group>
        <Row>
          <div className="col-12 mt-5">
            <Button
              variant="primary"
              onClick={(e) => valida(e)}
              type="submit"
              className="button-primary"
            >
              Continuar
            </Button>
          </div>
          <div className="col-12 mt-5 px-4">
            <Button
              variant="outline-secondary" 
              onClick = {(e) => voltar(e)}            
              type="submit"
              className="button-primary"
            >
              Voltar
            </Button>
          </div>
        </Row>
        <Row></Row>
      </Form>
    </div>
  );
};

export default withRouter(OTP);
