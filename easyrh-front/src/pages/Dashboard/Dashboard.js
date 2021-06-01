import {Container, Table, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import $ from 'jquery';
import './Dashboard.css'
import ModalAdicionar from '../Adicionar/Adicionar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>


function Dashboard(){
    let funcDic = {10: ["Mark", "Financeiro"], 1: ["Gustavo", "Marketing"], 2:["Ted", "Tecnologia"]}
    /*
            $('.btnExcluir').on('click', function(event) {
            //event.preventDefault(); // To prevent following the link (optional)
            alert("oi")
        });*/
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults)    
    
    const deleteFunc = () => {
        //bater na API
        //funcDic.delete()
        alert("Funcionário deletado.")
    }

       
    return(
        <Container fluid>
            <Row>
                <Col class="col-12 mt-4 mb-2 pl-5">
                    <h1>EasyRH</h1>
                    <p>NOME EMPRESA LOGADA</p>
                    <p>CNPJ - CNPJ AQUI</p>
                    <Button variant="secundary">Sair</Button>
                </Col>
            </Row>
            { showResults ? <ModalAdicionar id="adicionar"/> : null}
            <Container fluid="md">
                <Row>
                    <Col>
                        <Table bordered hover responsive>                
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col" colSpan="1" className="text-center">#</th>
                                <th scope="col" colSpan="2">Nome</th>
                                <th scope="col" colSpan="3">Setor</th>
                                <th scope="col" colSpan="4" className="text-center">   
                                    <Button id="btnAdicionar" variant="secundary" onClick={onClick}>                                
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                    </Button> 
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: Object.keys(funcDic).length }).map((_, index) => (
                                    <tr>
                                
                                    <td colSpan="1" className="text-center">{Object.keys(funcDic)[index]}</td>
                                    <td colSpan="2">{(funcDic[Object.keys(funcDic)[index]])[0]}</td>
                                    <td colSpan="3">{(funcDic[Object.keys(funcDic)[index]])[1]}</td>
                                    <td className="text-center" colSpan="4">
                                        <Button class="btnExcluir" variant="secundary" onClick={deleteFunc} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                            </svg>
                                        </Button>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>                
                        </Table>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}


function Valida(){
    let {email} = useParams();
}

export default Dashboard