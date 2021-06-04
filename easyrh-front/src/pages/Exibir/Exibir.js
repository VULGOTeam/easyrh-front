import React from 'react';
import  { withRouter } from 'react-router-dom'
import './Exibir.css'

const Exibir = props => {
    return (
        <Container>
            <div class="box">
                <Form class="pt-2 mx-2">

                    <h1 className="text-center">EasyRH </h1>
                    <p className="text-center">Exibir funcionário</p>
                    
                    <Form.Label>NOME</Form.Label>
                    <Form.Control placeholder="" />

                    <Form.Label class="pt-2">SETOR</Form.Label>
                    <Form.Control placeholder="" />

                    <Form.Label class="pt-2">SALÁRIO</Form.Label>
                    <Form.Control  placeholder="" />

                    <Row>
                        <Col>
                            <Form.Label className="text-center col pt-3">MESES TRAB.</Form.Label>
                            <Form.Control  placeholder="" />
                        </Col>
                        <Col>
                            <Form.Label className="text-center col pt-3">DIAS FÉRIAS</Form.Label>
                            <Form.Control placeholder="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col class="col-12 pb-5 pt-4">
                        <Button variant="primary" type="submit" className="button-primary">
                            Continuar
                        </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
}

export default withRouter(Exibir)