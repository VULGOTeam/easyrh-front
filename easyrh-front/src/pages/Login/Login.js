import logo from '../../logo.svg';
import {Form, Button, Container, Row, Grid, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login(){
    return (
            <Container>
               <Row>
                 <Col class="col-md-12">
                        <Form class="form-login .form-group">
                            <Row>
                                <Form.Label>EasyRH</Form.Label>
                            </Row>
                            <Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>E-MAIL</Form.Label>
                                    <Form.Control type="email" />
                                    <Form.Text className="text-muted">
                                    Utilize seu e-mail cadastrado para receber o código de acesso
                                    ou digite o seu melhor e-mail para criar uma nova conta
                                    </Form.Text>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Button variant="primary" type="submit">
                                Continuar
                                </Button>
                            </Row>
                            <Row>
                            <Form.Text className="text-muted">
                            Se ainda não possuir uma conta, fique tranquilo que criaremos uma para você
                            </Form.Text>
                            </Row>
                            
                    </Form>
                </Col>
                </Row>
        </Container>
    );
}

export default Login