import api from './api'

class EmployeesService {
    
  getEmployees (){
    return api.get('/employees', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('@TOKEN')}`
      }
    })
  }

  addEmployee({ name, gross, hired_at, department, vacations }){
    return api.post('/employees', {
      name,
      gross,
      hired_at,
      department,
      vacations
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('@TOKEN')}`
      },
    })
  }

  
  calculateSalary(gross, months, adds, vacation_days){
    return api.get('/salary/calculate', 
        { 
          params: 
          {
            gross, 
            months, 
            adds, 
            vacation_days
          } 
        }, 
        {
          headers: 
            {
              'Authorization': `Bearer ${localStorage.getItem('@TOKEN')}`
            },
        }
      )
  }

  deleteEmployee(id){
    return api.delete(`/employees/${id}`,{
     headers: {
        'Authorization': `Bearer ${localStorage.getItem('@TOKEN')}`
      },
    })
  }

  getEmployee(id){
    return api.get(`/employees/${id}`,{
     headers: {
        'Authorization': `Bearer ${localStorage.getItem('@TOKEN')}`
      },
    })
  }
  

}

export default EmployeesService