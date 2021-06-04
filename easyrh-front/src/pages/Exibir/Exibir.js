import React from 'react';
import  { withRouter } from 'react-router-dom'
import EmployeesService from '../../services/EmployeesService';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import './Exibir.css'

const Exibir = props => {

    const employeesService = new EmployeesService()

    const [gross, setGross] = useState(0)
    const [liquid, setLiquid] = useState(0)
    const [months, setMonths] = useState(0)
    const [vacation_gross, setVacationGross] = useState(0)
    const [christmas_bonus, setChristmasBonus] = useState(0)
    const [name, setName] = useState("NOMEAQUI")
    const [department, setDepartment] = useState("N/A")
    const [adds, setAdds] = useState(0)
    const [vacation_days, setVacationDays] = useState(0)

    useEffect(() => {
        console.log(props)
        },[]);

    const calcular = async e => {
        e.preventDefault()      
        

        const params = {
            gross: gross, months: months, adds: adds, vacation_days: vacation_days
        }

         
        try{

            const {data: results} = await employeesService.calculateSalary( params )
            console.log(results)

            setGross(results.total.gross)
            setMonths(results.total.months)
            setLiquid(results.total.liquid)

            
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
        <Container>
            <div class="box">
                <Form class="pt-2 mx-2">

                    <h1 className="text-center">EasyRH </h1>
                    <p className="text-center">Exibir funcionário</p>
                    
                    <Form.Label>NOME</Form.Label>
                    <Form.Control placeholder={name}  readOnly/>

                    <Form.Label class="pt-2" >SETOR</Form.Label>
                    <Form.Control placeholder={department} readOnly/>

                    <Form.Label class="pt-2">SALÁRIO BRUTO</Form.Label>
                    <Form.Control  placeholder={gross} readOnly/>

                    <Form.Label class="pt-2"  readOnly>SALÁRIO LÍQUIDO</Form.Label>
                    <Form.Control  placeholder={liquid}  readOnly/>


                    <Row>
                        <Col>
                            <Form.Label className="text-center col pt-3">MESES TRAB.</Form.Label>
                            <Form.Control  placeholder={months} readOnly/>
                        </Col>
                        <Col>
                            <Row>
                                <Form.Label className="text-center col pt-3" >FÉRIAS</Form.Label>
                                <Form.Control placeholder={vacation_gross} readOnly/>
                                <Form.Control placeholder="" />
                            </Row>                            
                        </Col>
                        <Col>
                            <Form.Label className="text-center col pt-3">DÉCIMO TERCEIRO</Form.Label>
                            <Form.Control  placeholder={christmas_bonus} readOnly/>
                        </Col>
                    </Row>
                    <Row>
                        <Col class="col-12 pb-5 pt-4">
                        <Button variant="primary" type="submit" className="button-primary">
                            Continuar
                        </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
}

export default withRouter(Exibir)