import {Form, Button,  Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cadastro.css'
import { useState, useEffect, Component, handleClick} from 'react'

import Empresa from '../../components/Empresa'
import  { Redirect } from 'react-router-dom'




function Cadastro (){
    /*componentDidMount(props){
        console.log("property_id",this.props.location.state.property_id);};*/

   /* useEffect(() => {
        console.log("property_id",this.props.location.state.property_id);
        }, []);*/
        
  const [cnpj, setCNPJInput] = useState('');
  const [stateName, setNameInput] = useState('');
  const [stateEmail, setEmailInput] = useState('')
  const [shoulRedirect, setInput] = useState('')

  return(
      <div class="box">
           { shoulRedirect === '3' ? <Redirect to={{
               pathname: '/dashboard',
               state: { property_id:  stateEmail + "|" + stateName + "|" + cnpj}
               }}/> : null}

      <div class="logo-header">
          <h1>EasyRH </h1>
      </div>
      <Form className="m-lateral"> 
          <Form.Group className='centro'>
              <Form.Label><p className="font-weight-bold">NOME DA EMPRESA</p></Form.Label>
              <Form.Control type="text" onChange={e => setNameInput(e.target.value)} placeholder="" />
              
          </Form.Group>
          <Form.Group >
              <Form.Label><p className="font-weight-bold">CNPJ</p></Form.Label>
              <Form.Control type="text" onChange={e => {setCNPJInput(e.target.value); setEmailInput(this.props.location.state.property_id)}}  placeholder="Somente números" />
            </Form.Group>
          <Row>
              <div className="col-12 mt-5">
                  <Button variant="primary" onClick={() =>setInput(Valida(stateName, cnpj))} type="submit" className="button-primary">
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

function Valida (s, c) {
    
    let email = "teste";//this.props.location.state.property_id;//useParams();
    const nome = s;
    const cnpj = c;
    const empresa = new Empresa(email, nome, cnpj);
    
    if(empresa.cadastraEmpresa()){
        //redirecionar para dashboard
    }else{
        //mostrar mensagem de erro
        alert("Erro ao cadastrar empresa.")
    }

    const existe = true;
    const valido = true;
    
    if(!valido){
        return '0';
    }
    
    if(existe){
      return '3';
       
    }
    else{
        return '2';
        }  

}

export default Cadastro