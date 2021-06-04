import api from './api'

class AuthenticationService {

  sendOtp(email) {
    return api.post('/users/sign-in',{email}) // {email: email}
  }

  verifyOtp(email, otp) {
    return api.put('/users/sign-in',{email, otp})
  }

  signUp(email, name, cnpj){
    return api.post('/users', {email, name, cnpj})
  }

  calculateSalary(gross, months, adds, vacation_days){
    return api.get('/salary/calculate', { params: {gross, months, adds, vacation_days} })
  }


}

export default AuthenticationService;