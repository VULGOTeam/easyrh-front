import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cadastro.css'

function Cadastro (){
  return(
      <div class="box">
      <div class="logo-header">
          <h1>EasyRH </h1>
      </div>
      <Form className="m-lateral"> 
          <Form.Group className='centro'>
              <Form.Label><p class="font-weight-bold">NOME DA EMPRESA</p></Form.Label>
              <Form.Control type="text" placeholder="" />
              
          </Form.Group>
          <Form.Group >
              <Form.Label><p class="font-weight-bold">CNPJ</p></Form.Label>
              <Form.Control type="text" placeholder="Somente números" />
            </Form.Group>
          <Row>
              <div class="col-12 mt-5">
                  <Button variant="primary" href="/OTP" type="submit" className="button-primary">
                      Continuar
                  </Button>
              </div>
          </Row>
          <Row>
          </Row>
      </Form>
  </div>
  )
}


function Valida(){
    let {email} = useParams();
}

export default Cadastro