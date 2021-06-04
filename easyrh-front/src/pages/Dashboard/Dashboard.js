import {Container, Table, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import { useState, useEffect} from 'react';
import ModalAdicionar from '../Adicionar/Adicionar';
import ShowEmployee from '../Exibir/Exibir';

import EmployeesService from '../../services/EmployeesService';
import  { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>

const Dashboard = props => {
    const mock_funcionarios = [
        {
          "company_id": "60b7f8010049922066ca6ba9",
          "name": "Mateus Teste",
          "data": {},
          "gross": 3000,
          "hired_at": "2020-09-08T00:00:00",
          "created_at": "2021-06-04T06:24:52.573000",
          "updated_at": "2021-06-04T06:24:52.573000",
          "deleted_at": null,
          "id": "60b9f1645fd9cb1c9b361891"
        },
        {
          "company_id": "60b7f8010049922066ca6ba9",
          "name": "Mateus Tozoni",
          "data": {},
          "gross": 3000,
          "hired_at": "2020-09-08T00:00:00",
          "created_at": "2021-06-04T06:39:57.044000",
          "updated_at": "2021-06-04T06:39:57.044000",
          "deleted_at": null,
          "id": "60b9f4ed5fd9cb1c9b361892"
        }
    ]

    const employeesService = new EmployeesService()

    const [showResults, setShowResults] = useState(false)
    const [ showEmployee, setShowEmployee ] = useState(false)

    const onClick = () => setShowResults(!showResults)

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getEmployees()
    },[]);

    const tableRowEvents = {
        onClick: (e, row, rowIndex) => {
          console.log(`clicked on row with index: ${rowIndex}`);
          setShowEmployee(!showEmployee)
        },
     }

    const getEmployees = async () => {
        try{
            const {data: listUsers} = await employeesService.getEmployees()
            setEmployees(listUsers)
        }catch (error) {
            console.log(error)
        }
    }

    const sair = async e => {
        e.preventDefault()
        props.history.push({
          pathname: '/sair',
      })
    }

    const deleteFunc = (i) => {
        //bater na API
        //funcDic.delete()
        //alert("Funcionário deletado.")
        toast("Funcionário deletado", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }
       
    return(
        <>
        <ModalAdicionar show={showResults} setShow={setShowResults} />
        <Container fluid >
            <Row>
                <Col class="col-12 mt-4 mb-2 pl-5">
                    <h1>EasyRH</h1>
                    <p>{props.user.name}</p>
                    <p>CNPJ: {props.user.cnpj}</p>
                    <Button onClick={(e) => sair(e)} variant="secundary">Sair</Button>
                </Col>
            </Row>
            { showEmployee ? <ShowEmployee/> : null}
            <Container fluid="md">
                <Row>
                    <Col>
                        <Table bordered hover responsive rowEvents={ tableRowEvents }>                
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col" colSpan="1" className="text-center">#</th>
                                <th scope="col" colSpan="2">Nome</th>
                                <th scope="col" colSpan="3">Setor</th>
                                <th scope="col" colSpan="4" className="text-center">   
                                    <Button id="btnAdicionar" variant="secundary" onClick={onClick}>                                
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-plus-square" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                    </Button> 
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees?.map((employee, i) => (
                                    <tr key={i}>
                                        <td className="text-center" colSpan="1">{employee.id.slice(employee.id.length-4,employee.id.length)}</td>
                                        <td className="text-center" colSpan="2">{employee.name}</td>
                                        <td className="text-center" colSpan="3">{employee?.department || "N/A"}</td>
                                        <td className="text-center" colSpan="4">
                                            <Button class="btnExcluir" variant="secundary" onClick={e => deleteFunc(employee)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                </svg>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}

                                {/* {Array.from({ length: Object.keys(funcDic).length }).map((_, index) => (
                                    <tr key={index}>
                                        <td colSpan="1" className="text-center">{Object.keys(funcDic)[index]}</td>
                                        <td colSpan="2">{(funcDic[Object.keys(funcDic)[index]])[0]}</td>
                                        <td colSpan="3">{(funcDic[Object.keys(funcDic)[index]])[1]}</td>
                                        <td className="text-center" colSpan="4">
                                            <Button class="btnExcluir" variant="secundary" onClick={e => deleteFunc(index)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                </svg>
                                            </Button>
                                        </td>
                                    </tr>
                                ))} */}
                            </tbody>                
                        </Table>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}


export default withRouter(Dashboard)