import { Form, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthenticationService from '../../services/AuthenticationService'
import "./Cadastro.css";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { Redirect, withRouter } from "react-router-dom";

const Cadastro = (props) => {
  useEffect(() => {
    console.log(props.location.state);
  }, []);  

  const [cnpj, setCNPJInput] = useState("");
  const [stateName, setNameInput] = useState("");


  const authenticationService = new AuthenticationService()
  
    const valida = async (e, name, cnpj) => {
        e.preventDefault()

        try {
            const { data: user } = await authenticationService.signUp(props.location.state.email, name, cnpj)
            
            await authenticationService.sendOtp(user.email)

            props.history.push({
                pathname: "/OTP",
                state: { email: user.email },
            });
        } catch (error) {
            toast(error?.response?.data?.message || "Ops, ocorreu um erro, tente novamente!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        
    }

  return (
    <div className="box">
      <div className="logo-header">
        <h1>EasyRH </h1>
      </div>
      <Form
        className="m-lateral"
        onSubmit={(e) => e.preventDefault()}
      >
        <Form.Group className="centro">
          <Form.Label>
            <p className="font-weight-bold">NOME DA EMPRESA</p>
          </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setNameInput(e.target.value)}
            placeholder=""
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <p className="font-weight-bold">CNPJ</p>
          </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setCNPJInput(e.target.value);
            }}
            placeholder="Somente números"
          />
        </Form.Group>
        <Row>
          <div className="col-12 mt-5">
            <Button
              variant="primary"
              onClick={(e) => valida(e, stateName, cnpj)}
              type="submit"
              className="button-primary"
            >
              Continuar
            </Button>
          </div>
        </Row>
        <Row></Row>
      </Form>
    </div>
  );
};


export default withRouter(Cadastro);
