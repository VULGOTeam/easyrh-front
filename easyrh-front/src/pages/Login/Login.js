
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import React, { useState} from 'react'
import  { Redirect } from 'react-router-dom'



function Login(){
    const [stateEmail, setEmailInput] = useState('')
    const [shoulRedirect, setInput] = useState('')
    
    const onSubmit = () => {

        const existe = true;
        const valido = true;

        if(!valido){
            return false
        }
        //this.context.router.push("/cadastro")
        if(existe){
            //verifica senha
           setInput('3');
           alert(shoulRedirect)
           /*to={{
               pathname: '/dashboard',
               state: { property_id: stateEmail }
               }}/>;*/
        }
        else{
            setInput('2');
            alert(shoulRedirect)
            return <Redirect to={{
                pathname: '/cadastro',
                state: { property_id: stateEmail}
                }}/>;
            }    
      };

            

    return (
        <Container>  
            { shoulRedirect === '3' ? <Redirect to={{
               pathname: '/dashboard',
               state: { property_id: stateEmail }
               }}/> : null}
            <div className="box">
                <div className="logo-header">
                    <h1>EasyRH </h1>
                </div>
                <Form className="m-lateral">
                    <Form.Group className="centro" controlId="formBasicEmail">
                        <Form.Label>E-MAIL</Form.Label>
                        <Form.Control onChange={setEmailInput} type="email" placeholder="" />
                        
                        <Form.Text className="text-muted">
                        Utilize seu e-mail cadastrado para receber o código de acesso
                        ou digite o seu melhor e-mail para criar uma nova conta
                        </Form.Text>
                    </Form.Group>
                    <Row>
                        <div className="col-12 mt-5 px-4">
                            <Button variant="primary" onClick={onSubmit} type="submit" className="button-primary">
                                Continuar
                            </Button>
                        </div>
                    </Row>
                    <Row>
                        <Col className="col-2 px-5">
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