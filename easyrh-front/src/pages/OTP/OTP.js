import {Form, Button, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OTP.js'

function OTP (){
    return(
    <div className="box">
      <div className="logo-header">
          <h1>EasyRH </h1>
      </div>
      <Form className="m-lateral"> 
          <Form.Group className='centro'>
                <Form.Label>CÓDIGO DE ACESSO</Form.Label>
                <Form.Control type="text" placeholder="" />
                <Form.Text className="text-muted">
                    Utilize seu código de acesso recebido no e-mail
                </Form.Text>
          </Form.Group>
          <Row>
              <div className="col-12 mt-5">
                  <Button variant="primary" href="/dashboard" type="submit" className="button-primary">
                      Continuar
                  </Button>
              </div>
              <div className="col-12 mt-5 px-4">
                  <Button variant="outline-secondary" href="/" type="submit" className="button-primary">
                      Voltar
                  </Button>
              </div>
          </Row>
          <Row>
          </Row>
      </Form>
  </div>
  )
}
export default OTP
