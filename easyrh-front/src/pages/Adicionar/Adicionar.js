import {Form, Button, Container, Row, Col, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Adicionar = () =>{
    return(
        <Container>
            <div class="box">
                <div class="logo-header">
                    <h1>EasyRH </h1>
                </div>
                <Form className="m-lateral">
                    <Form.Group className="centro" controlId="formBasicEmail">
                        <Form.Label>E-MAIL</Form.Label>
                        <Form.Control type="email" placeholder="" />
                        
                        <Form.Text className="text-muted">
                        Utilize seu e-mail cadastrado para receber o código de acesso
                        ou digite o seu melhor e-mail para criar uma nova conta
                        </Form.Text>
                    </Form.Group>
                    <Row>
                        <div class="col-12 mt-5 px-4">
                            <Button variant="primary" href="/cadastro" type="submit" className="button-primary">
                                Continuar
                            </Button>
                        </div>
                    </Row>
                    <Row>
                        <Col class="col-2 px-5">
                            <Form.Text  className="hint-conta text-muted">
                            Se ainda não possuir uma conta, fique tranquilo que criaremos uma para você
                            </Form.Text>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    )
}

export default Adicionar

