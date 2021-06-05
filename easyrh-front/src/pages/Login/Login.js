import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import AuthenticationService from '../../services/AuthenticationService'
import { toast } from 'react-toastify';

const Login = (props) => {

  const authenticationService = new AuthenticationService()

  const valida = async (e, email) => {
    e.preventDefault()

    try {
      await authenticationService.sendOtp(email);
      props.history.push({
        pathname: "/OTP",
        state: { email },
      });
    } catch (error) {
      if (error.response?.status === 404) {
        props.history.push({
          pathname: "/cadastro",
          state: { email },
        });
      } else {
        toast('Falha ao entrar, tente novamente mais tarde!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  const [stateEmail, setEmailInput] = useState("");

  return (
    <Container>
      <div className="box">
        <div className="logo-header">
          <h1>EasyRH </h1>
        </div>
        <Form className="m-lateral">
          <Form.Group className="centro" controlId="formBasicEmail">
            <Form.Label>E-MAIL</Form.Label>
            <Form.Control
              onChange={(e) => setEmailInput(e.target.value)}
              type="email"
              placeholder=""
            />

            <Form.Text className="text-muted">
              Utilize seu e-mail cadastrado para receber o código de acesso ou
              digite o seu melhor e-mail para criar uma nova conta
            </Form.Text>
          </Form.Group>
          <Row>
            <div className="col-12 mt-5">
              <Button
                variant="primary"
                onClick={(e) => valida(e, stateEmail)}
                type="submit"
                className="button-primary"
              >
                Continuar
              </Button>
            </div>
          </Row>
          <Row>
            <Col>
              <Form.Text className="hint-conta text-muted">
                Se ainda não possuir uma conta, fique tranquilo que criaremos
                uma para você
              </Form.Text>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default withRouter(Login);
