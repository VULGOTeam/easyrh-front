import {Container, Table, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>

function Dashboard(){

    const func = ["Mark", "Financeiro"]

   
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
            <Container fluid="md">
                <Row>
                    <Col>
                        <Table striped bordered hover responsive>                
                            <thead>
                                <tr>
                                <th className="text-center">#</th>
                                <th colSpan="2">Nome</th>
                                <th colSpan="3">Setor</th>
                                <th colSpan="4" className="text-center">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <tr>
                                
                                    <td className="text-center">{index+1}</td>
                                    <td colSpan="2">{func[0]}</td>
                                    <td colSpan="3">{func[1]}</td>
                                    <td className="text-center" colSpan="4">
                                        <Button  variant="secundary">
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

export default Dashboard