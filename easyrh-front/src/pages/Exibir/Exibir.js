import React from 'react';
import  { withRouter } from 'react-router-dom'
import EmployeesService from '../../services/EmployeesService';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Row, Modal, Col, Button} from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import './Exibir.css'

const Exibir = props => {

    const employeesService = new EmployeesService()

    const [gross, setGross] = useState(0)
    const [user, setUser] = useState(0)
    const [liquid, setLiquid] = useState(0)
    const [months, setMonths] = useState(0)
    const [vacation_gross, setVacationGross] = useState(0)
    const [christmas_bonus, setChristmasBonus] = useState(0)
    const [name, setName] = useState("a")
    const [department, setDepartment] = useState("N/A")
    const [adds, setAdds] = useState(0)
    const [vacation_days, setVacationDays] = useState(15)
    const [irrf, setIrrf] = useState(0)
    const [inss, setInss] = useState(0)

    const loadInfo = async e => {
        
        try{   
            const {data: user} = await employeesService.getEmployee(props.location.state.id)
            
            console.log(user)

            setUser(user)
            setDepartment(user.department)
            setGross(user.gross)
            setName(user.name)

            
        }catch (error) {
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
    
        loadInfo()
    },[]);

    const calcular = async e => {
        
        e.preventDefault()          
        const today = new Date()
        const date_hired = new Date(user.hired_at)
        const m =  (today.getMonth() - date_hired.getMonth())
        console.log(m)
        
        try{   
            const params = {
                gross: user.gross, months: m, adds: adds, vacation_days: vacation_days
            }

            const {data: results} = await employeesService.calculateSalary( params )
            console.log(results)
            
            setMonths(results.salary.months)
            setLiquid(results.salary.liquid)
            setVacationGross(results.vacation.liquid)
            setDepartment(props.location.state.name)
            setAdds(results.total.adds)
            setChristmasBonus(results.thirteenth.liquid)

            
        }catch (error) {
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

    return (
        <Modal
            show={props.show}
            onHide={() => { props.setShow(false) }}
            keyboard={false}
        >
            <Modal.Dialog>
                <Modal.Body>
                    <Form class="pt-2 mx-2">
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2">NOME</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control placeholder={name} readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2">SETOR</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control placeholder={department} readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2">SALÁRIO BRUTO</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control placeholder={gross} readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>SALÁRIO LÍQUIDO</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control placeholder={liquid}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>ADICIONAIS/DESCONTOS</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control onChange={(e) => setAdds(e.target.value)} placeholder={adds}/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>DEDUÇÃO INSS</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={inss}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>DEDUÇÃO IRRF</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={irrf}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2">FÉRIAS</Form.Label>
                            </Col>
                            
                            <Col>
                                <Form.Control placeholder={vacation_gross} readOnly/>
                            </Col>
                            <Col>
                                <Form.Control onChange={(e) => setVacationDays(e.target.value)} placeholder={vacation_days} />
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2">DÉCIMO TERCEIRO</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={christmas_bonus} readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col class="col-12 pb-5 pt-4">
                                <Button variant="primary" onClick={(e) => calcular(e)} type="submit" className="button-primary">
                                    CALCULAR
                                </Button>
                            </Col>
                        </Row>
                        <Row></Row>            
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </Modal>
    );
}

export default withRouter(Exibir)