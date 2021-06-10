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

    const employeesService = new EmployeesService()

    const [ showResults, setShowResults ] = useState(false)
    const [ showEmployee, setShowEmployee ] = useState(false)
    const [ employeeId, setEmployeeId ] = useState()

    const onClick = () => setShowResults(!showResults)

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getEmployees()
    },[showResults]);

    const exibirEmployee = (e, id) => {
        setEmployeeId(id)
        setShowEmployee(!showEmployee)
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

    const deleteFunc = async (e, id) => {
        e.preventDefault()

        try{
            await employeesService.deleteEmployee(id)
            getEmployees()
            
        }catch (error) {
            console.log(error)
            toast("Funcionário deletado", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }
       
    return(
        <>
        <ModalAdicionar show={showResults} setShow={setShowResults} />
        <ShowEmployee show={showEmployee} setShow={setShowEmployee} employeeId={employeeId} />
        <Container fluid >
            <Row>
                <Col class="col-12 mt-4 mb-2 pl-5">
                    <h1>EasyRH</h1>
                    <p>{props.user.name}</p>
                    <p>CNPJ: {props.user.cnpj}</p>
                    <Button onClick={(e) => sair(e)} variant="secundary">Sair</Button>
                </Col>
            </Row>
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
                                        <td className="text-center" colSpan="1"  onClick={(e) => exibirEmployee( e, employee.id)}>{employee.id.slice(employee.id.length-4,employee.id.length)}</td>
                                        <td className="text-center" colSpan="2"  onClick={(e) => exibirEmployee( e, employee.id)}>{employee.name}</td>
                                        <td className="text-center" colSpan="3"  onClick={(e) => exibirEmployee( e, employee.id)}>{employee?.department || "N/A"}</td>
                                        <td className="text-center" colSpan="4">
                                            <Button class="btnExcluir" variant="secundary" onClick={e => deleteFunc( e, employee.id )} >
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
        </>
    )
}


export default withRouter(Dashboard)