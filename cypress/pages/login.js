class loginLocators {
    constructor() {
      this.inicioSesion = 'a[href="/logon.frc"]';
      this.txtName = '[id="txtUsuario"]';
      this.select = '[id="txtDominios"]';
      this.password = '[id="pwdClave"]';
      this.btnEnviar = '[id="btnEnviar"]';
    }
  }
  
  export default class LoginPages {
    constructor() {
      this.locators = new loginLocators();
    }
  
    getInicioSesion() {
      return cy.get(this.locators.inicioSesion);
    }
  
    getTxtName() {
      return cy.get(this.locators.txtName);
    }
  
    getSelect() {
      return cy.get(this.locators.select);
    }
  
    getPassword() {
      return cy.get(this.locators.password);
    }
  
    getBtnEnviar() {
      return cy.get(this.locators.btnEnviar);
    }
  }
  