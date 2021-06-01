

class Empresa{
    constructor(e, n, c) {
        this.email = e;
        this.nome = n;
        this.cnpj = c;
      }
    //Getter
      get qtdFuncionarios() {
          return this.calculaArea()
      }
  
      cadastraEmpresa() {
        var success = true
        
        return success;
      }

}

export default Empresa