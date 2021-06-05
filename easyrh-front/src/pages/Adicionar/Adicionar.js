import {Form, Button, Row, Col, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Adicionar/Adicionar.css';
import EmployeesService from '../../services/EmployeesService';
import { useState, useEffect} from 'react';
import  { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptbr from 'date-fns/locale/pt-BR';

registerLocale('pt-BR', ptbr);
setDefaultLocale('pt-BR');

const Adicionar = props =>{
    
    const employeesService = new EmployeesService()

    const [show, setShow] = useState(false);
    const [hiredAt, setHiredAt] = useState(Date.now())
    const [gross, setGross] = useState(0)
    const [name, setName] = useState("")
    const [department, setSetor] = useState()
    const [vacations, setVacationDays] = useState(0)
    
    const addEmployee = async e => {
        e.preventDefault();

        try{
            const {data: employee} = await employeesService.addEmployee({
                name,
                gross,
                department,
                vacations,
                hired_at: hiredAt
            })
            
            props.setShow(false)

            toast.success("Funcionário cadastrado com sucesso!", {
                autoClose: 3000,
                position: 'bottom-center'
            })
        }catch (error){
            console.log(error)
            toast("Erro ao calcular", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
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
            <Modal.Dialog>
                <Modal.Body>
                    <Form>

                        <h1 className="text-center">EasyRH </h1>
                        <p className="text-center">Adicionar funcionário</p>
                        
                        <Form.Label>NOME</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)} placeholder="" />

                        <Form.Label class="pt-2">SETOR</Form.Label>
                        <Form.Control onChange={(e) => setSetor(e.target.value)} placeholder="" />

                        <Form.Label class="pt-2">SALÁRIO</Form.Label>
                        <Form.Control onChange={(e) => setGross(e.target.value)} placeholder="" />

                        <Row>
                            <Col>
                                <Form.Label className="text-center col pt-3">MESES TRAB.</Form.Label>
                                <DatePicker className="form-control text-center w-100" selected={hiredAt} onChange={(date) => setHiredAt(date)} />
                            </Col>
                            <Col>
                                <Form.Label className="text-center col pt-3">DIAS FÉRIAS</Form.Label>
                                <Form.Control onChange={(e) => setVacationDays(e.target.value)} placeholder="" />
                            </Col>
                        </Row>
                        <Row>
                            <Col class="col-12 pb-5 pt-4">
                            <Button variant="primary" onClick={(e) => addEmployee(e)} type="submit" className="button-primary">
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

