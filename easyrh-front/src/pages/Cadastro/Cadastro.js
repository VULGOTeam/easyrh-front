import {Form, Button,  Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cadastro.css'
import { useState} from 'react'

import Empresa from '../../components/Empresa'



function Cadastro (){

  const [cnpj, setCNPJInput] = useState('')
  const [stateName, setNameInput] = useState('')

  return(
      <div class="box">
      <div class="logo-header">
          <h1>EasyRH </h1>
      </div>
      <Form className="m-lateral"> 
          <Form.Group className='centro'>
              <Form.Label><p className="font-weight-bold">NOME DA EMPRESA</p></Form.Label>
              <Form.Control type="text" onChange={setNameInput} placeholder="" />
              
          </Form.Group>
          <Form.Group >
              <Form.Label><p className="font-weight-bold">CNPJ</p></Form.Label>
              <Form.Control type="text" onChange={setCNPJInput}  placeholder="Somente números" />
            </Form.Group>
          <Row>
              <div className="col-12 mt-5">
                  <Button variant="primary" onClick={Valida(stateName, cnpj)} type="submit" className="button-primary">
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
function Valida(s, c){
    let email = "aqui";//this.props.location.state.property_id;//useParams();
    const nome = s;
    const cnpj = c;
    const empresa = new Empresa(email, nome, cnpj);
    
    if(empresa.cadastraEmpresa()){
        //redirecionar para dashboard
    }else{
        //mostrar mensagem de erro
        alert("Erro ao cadastrar empresa.")
    }
}

export default Cadastro