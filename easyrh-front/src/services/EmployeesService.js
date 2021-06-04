import api from './api'

class EmployeesService {
    
  getEmployees (){
    return api.get('/employees', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('@TOKEN')}`
      }
    })
  }

  addEmployee( name, gross, hired_at ){
    return api.get('/employees', { name, gross, hired_at })
  }

}

export default EmployeesService