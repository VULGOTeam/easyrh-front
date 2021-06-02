
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import React, { useState} from 'react'
import  { Redirect } from 'react-router-dom'

function Valida(stateEmail){
    const existe = true;
    const valido = true;
    alert(stateEmail)  
    if(!valido){
        return '0';
    }
    
    if(!existe){
      return '3';
       
    }
    else{
        return '2';
        }  
    
}

function Login(){
    const [stateEmail, setEmailInput] = useState('')
    const [shoulRedirect, setInput] = useState('')

    return (
        <Container>  
            { shoulRedirect === '3' ? <Redirect to={{
               pathname: '/dashboard',
               state: { property_id: stateEmail }
               }}/> : null}

            { shoulRedirect === '2' ? <Redirect to={{
               pathname: '/cadastro',
               state: { property_id: stateEmail }
               }}/> : null}
            <div className="box">
                <div className="logo-header">
                    <h1>EasyRH </h1>
                </div>
                <Form className="m-lateral">
                    <Form.Group className="centro" controlId="formBasicEmail">
                        <Form.Label>E-MAIL</Form.Label>
                        <Form.Control onChange={e => setEmailInput(e.target.value)} type="email" placeholder="" />
                        
                        <Form.Text className="text-muted">
                        Utilize seu e-mail cadastrado para receber o código de acesso
                        ou digite o seu melhor e-mail para criar uma nova conta
                        </Form.Text>
                    </Form.Group>
                    <Row>
                        <div className="col-12 mt-5 px-4">
                            <Button variant="primary" onClick={() =>setInput(Valida(stateEmail))} type="submit" className="button-primary">
                                Continuar
                            </Button>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Text  className="hint-conta text-muted">
                            Se ainda não possuir uma conta, fique tranquilo que criaremos uma para você
                            </Form.Text>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
}

  

export default Login