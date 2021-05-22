import logo from '../../logo.svg';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login(){
    return (
            <Container>
               <Row class="content-center">                 
                 <Col class="col-*-2"></Col>
                 <Col class="col-*-8 border">
                        <Form class="shadow border form-horizontal container-fluid py-3">
                            <Row>
                                    <Col class="col-*-3"></Col>
                                    <Col class="col-*-6">
                                        <Form.Label>EasyRH</Form.Label>
                                    </Col>
                                    <Col class="col-*-3"></Col>
                            </Row>
                            <Row>
                                <Col class="col-*-12 py-4">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>E-MAIL</Form.Label>
                                    <Form.Control type="email" />
                                    <Form.Text className="text-muted">
                                    Utilize seu e-mail cadastrado para receber o código de acesso
                                    ou digite o seu melhor e-mail para criar uma nova conta
                                    </Form.Text>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row class="py-3">
                                <Col class="col-*-12 py-3">
                                    <Button variant="primary" type="submit">
                                    Continuar
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col class="col-*-12 pt-5">
                                    <Form.Text  className="text-muted">
                                    Se ainda não possuir uma conta, fique tranquilo que criaremos uma para você
                                    </Form.Text>
                                </Col>
                            </Row>
                    </Form>
                </Col>

                <Col class="col-*-2"></Col>
                </Row>
        </Container>
    );
}

export default Login