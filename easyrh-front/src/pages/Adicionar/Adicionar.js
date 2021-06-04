import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Adicionar/Adicionar.css';
import AuthenticationService from '../../services/AuthenticationService';
import { useState, useEffect} from 'react';
import  { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify';

const Adicionar = props =>{
    
    const authenticationService = new AuthenticationService()
    /*
    const [gross, setGross] = useState(0)
    const [months, setMonths] = useState(0)
    const [adds, setAdds] = useState(0)
    const [vacation_days, setVacationDays] = useState(0)*/

    const [func_name, setName] = useState("")
    const [setor, setSetor] = useState("Tecnologia")

    useEffect(() => {
        console.log(props)
        },[]);
/*
    const calcular = async e => {
        e.preventDefault()

        const params = {
            gross: gross, 
            months: months, 
            adds: adds, 
            vacation_days: vacation_days
        }
        
        try{

            const {data: results} = await authenticationService.calcularSalario( params )

            props.history.push({
                pathname: '/dashboard',
                state: {gross: results.gross, months: results.months, adds: results.adds, vacation_days: results.vacation_days }
            })
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
    }*/

    return(
        <Container>
            <div class="box">
                <Form class="pt-2 mx-2">

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
            </div>
        </Container>
    )
}

export default withRouter(Adicionar)

