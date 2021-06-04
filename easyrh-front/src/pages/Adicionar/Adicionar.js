import {Form, Button, Container, Row, Col, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Adicionar/Adicionar.css';
import EmployeesService from '../../services/EmployeesService';
import { useState, useEffect} from 'react';
import  { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify';

const Adicionar = props =>{
    
    const employeesService = new EmployeesService()

    const [show, setShow] = useState(false);

    const [func_gross, setGross] = useState(0)
    const [func_name, setName] = useState("")
    const [setor, setSetor] = useState("Tecnologia")
    
    const addEmployee = async e => {
        e.preventDefault()

        let dateNow = new Date();

        try{
            const {data: employee} = await employeesService.addEmployee(func_name, func_gross, dateNow.getTime())
            /*
            props.history.push({
                path="/dashboard",
                state: employee    //arrumar aqui
            })*/
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(props)
    },[]);


    return(
        <Modal
            show={props.show}
            onHide={() => { props.setShow(false) }}
            keyboard={false}
        >
            <Modal.Dialog >
                <Modal.Body>
                    <Form>

                        <h1 className="text-center">EasyRH </h1>
                        <p className="text-center">Adicionar funcionário</p>
                        
                        <Form.Label>NOME</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)} placeholder="" />

                        <Form.Label class="pt-2">SETOR</Form.Label>
                        <Form.Control onChange={(e) => setSetor(e.target.value)} placeholder="" />

                        <Form.Label class="pt-2">SALÁRIO</Form.Label>
                        <Form.Control /*onChange={(e) => setGross(e.target.value)}*/ placeholder="" />

                        <Row>
                            <Col>
                                <Form.Label className="text-center col pt-3">MESES TRAB.</Form.Label>
                                <Form.Control /*onChange={(e) => setMonths(e.target.value)}*/ placeholder="" />
                            </Col>
                            <Col>
                                <Form.Label className="text-center col pt-3">DIAS FÉRIAS</Form.Label>
                                <Form.Control /*onChange={(e) => setVacationDays(e.target.value)}*/ placeholder="" />
                            </Col>
                        </Row>
                        <Row>
                            <Col class="col-12 pb-5 pt-4">
                            <Button variant="primary" /*onClick={(e) => calcular(e)}*/ type="submit" className="button-primary">
                                Continuar
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </Modal>
    )
}

export default withRouter(Adicionar)

