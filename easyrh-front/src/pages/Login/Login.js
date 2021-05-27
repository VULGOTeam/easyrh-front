import logo from '../../logo.svg';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login(){
    return (
    <div class="box">
        <div class="logo-header">
            <h1>EasyRH </h1>
        </div>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label><p class="font-weight-bold">E-MAIL</p></Form.Label>
                <Form.Control type="email" placeholder="" />
                
                <Form.Text className="text-muted">
                Utilize seu e-mail cadastrado para receber o código de acesso
                ou digite o seu melhor e-mail para criar uma nova conta
                </Form.Text>
            </Form.Group>
            <Row>
                <div class="col-12 mt-5">
                    <Button variant="primary" type="submit" className="button-primary">
                        Continuar
                    </Button>
                </div>
            </Row>
        </Form>
    </div>
    );
}

export default Login