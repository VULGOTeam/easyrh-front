import React from 'react';
import  { withRouter } from 'react-router-dom'
import EmployeesService from '../../services/EmployeesService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Modal, Col} from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import './Exibir.css'

const Exibir = props => {

    const employeesService = new EmployeesService()

    const [gross, setGross] = useState(0)
    const [user, setUser] = useState(0)
    const [liquid, setLiquid] = useState(0)
    const [months, setMonths] = useState(1)
    const [vacation_gross, setVacationGross] = useState(0)
    const [christmas_bonus, setChristmasBonus] = useState(0)
    const [name, setName] = useState("")
    const [department, setDepartment] = useState("N/A")
    const [adds, setAdds] = useState(0)
    const [vacation_days, setVacationDays] = useState(15)
    const [irrf, setIrrf] = useState(0)
    const [inss, setInss] = useState(0)
    const [deducao_irrf_ferias, setDeducaoIrrfFerias] = useState(0)
    const [deducao_inss_ferias, setDeducaoInssFerias] = useState(0)
    const [aliquota_irrf_ferias, setAliquotaIrrfFerias] = useState(0)
    const [aliquota_inss_ferias, setAliquotaInssFerias] = useState(0)

    const [deducao_irrf_salario, setDeducaoIrrf] = useState(0)
    const [deducao_inss_salario, setDeducaoInss] = useState(0)
    const [aliquota_irrf_salario, setAliquotaIrrf] = useState(0)
    const [aliquota_inss_salario, setAliquotaInss] = useState(0)

    const [deducao_irrf_dt, setDeducaoIrrfDeducaoDT] = useState(0)
    const [deducao_inss_dt, setDeducaoInssDeducaoDT] = useState(0)
    const [aliquota_irrf_dt, setAliquotaIrrfDT] = useState(0)
    const [aliquota_inss_dt, setAliquotaInssDT] = useState(0)

    function monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    const loadInfo = async e => {
        
        try{   
            const {data: user} = await employeesService.getEmployee(props.employeeId)
            
            console.log(user)

            setUser(user)
            setDepartment(user.department)
            setGross(user.gross)
            console.log(user.gross)
            setName(user.name)

            
            const today = new Date()
            const date_hired = new Date(user.hired_at)
            const m = monthDiff(date_hired, today)
            setMonths(m)
            console.log(m)

            
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
        calcular()
    }, [user, vacation_days])

    const calcular = async e => {
        if(!user) return
        
        //e.preventDefault()      
        
        const today = new Date()
        const date_hired = new Date(user.hired_at)
        const months = monthDiff(date_hired, today)
        
        console.log(months)
        try{   
            const params = {
                gross: user.gross, months: months, adds: user.adds, vacation_days: vacation_days
            }

            const {data: results} = await employeesService.calculateSalary( params )
            console.log(results)
            
            setLiquid(results.salary.liquid)
            setGross(results.salary.gross)
            setVacationGross(results.vacation.liquid)
            //setAdds(results.salary.taxes.descontos[0])
            setChristmasBonus(results.thirteenth.liquid)

            setDeducaoInss(results.salary.taxes.taxas.inss.deduction)
            setDeducaoIrrf(results.salary.taxes.taxas.irrf.deduction)
            setAliquotaInss(results.salary.taxes.taxas.inss.aliquot)
            setAliquotaIrrf(results.salary.taxes.taxas.irrf.aliquot)
            setInss(deducao_inss_salario + aliquota_inss_salario)
            setIrrf(deducao_irrf_salario + aliquota_irrf_salario)

            setDeducaoIrrfFerias(results.vacation.taxes.taxas.irrf.deduction)
            setDeducaoInssFerias(results.vacation.taxes.taxas.inss.deduction)
            setAliquotaInssFerias(results.vacation.taxes.taxas.inss.aliquot)
            setAliquotaIrrfFerias(results.vacation.taxes.taxas.irrf.aliquot)

            setDeducaoInssDeducaoDT(results.thirteenth.taxes.taxas.inss.deduction)
            setDeducaoIrrfDeducaoDT(results.thirteenth.taxes.taxas.inss.deduction)
            setAliquotaInssDT(results.thirteenth.taxes.taxas.irrf.aliquot)
            setAliquotaInssDT(results.thirteenth.taxes.taxas.irrf.aliquot)

            
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
            onChange = {(e) =>  calcular(e)}
            onShow={() => loadInfo()}
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
                                <Form.Control placeholder={"R$ " + gross.toFixed(2)} readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>SALÁRIO LÍQUIDO</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control placeholder={"R$ " + liquid.toFixed(2)}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>ADICIONAIS/DESCONTOS</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control onChange={(e) => {setAdds(e.target.value);calcular(e)}} placeholder={adds.toFixed(2)}/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>DEDUÇÃO INSS</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={"R$ " + deducao_inss_salario.toFixed(2)}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>ALÍQUOTA INSS</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={aliquota_inss_salario + " %"}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>DEDUÇÃO IRRF</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={"R$ " + deducao_irrf_salario.toFixed(2)}  readOnly/>
                            </Col>
                        </Row>                       
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>ALÍQUOTA IRRF</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={aliquota_irrf_salario + " %"}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2">FÉRIAS (DIAS)</Form.Label>
                            </Col>
                            
                            <Col>
                                <Form.Control placeholder={"R$ " + vacation_gross.toFixed(2)} readOnly/>
                            </Col>
                            <Col>
                                <Form.Control onChange={(e) => {setVacationDays(e.target.value)}} placeholder={vacation_days} />
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>DEDUÇÃO INSS FÉRIAS</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={"R$ " + deducao_inss_ferias.toFixed(2)}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>ALÍQUOTA INSS FÉRIAS</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={"" + aliquota_inss_ferias + " %"}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>DEDUÇÃO IRRF FÉRIAS</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={"R$ " + deducao_irrf_ferias.toFixed(2)}  readOnly/>
                            </Col>
                        </Row>                       
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>ALÍQUOTA IRRF FÉRIAS</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={aliquota_irrf_ferias + " %"}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2">DÉCIMO TERCEIRO</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={"R$ " + christmas_bonus.toFixed(2)} readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>DEDUÇÃO INSS 13º</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={"R$ " + deducao_inss_dt.toFixed(2)}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>ALÍQUOTA INSS 13º</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={aliquota_inss_dt + " %"}  readOnly/>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>DEDUÇÃO IRRF 13º</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={"R$ " + deducao_irrf_dt.toFixed(2)}  readOnly/>
                            </Col>
                        </Row>                       
                        <Row className="py-2">
                            <Col>
                                <Form.Label className="pl-2" readOnly>ALÍQUOTA IRRF 13º</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control  placeholder={aliquota_irrf_dt + " %"}  readOnly/>
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

/*
 <Row className="py-2">
                            <Col class="col-12 pb-5 pt-4">
                                <Button variant="primary" onClick={(e) => calcular(e)} type="submit" className="button-primary">
                                    CALCULAR
                                </Button>
                            </Col>
                        </Row>
*/