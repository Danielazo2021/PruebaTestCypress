
import LoginPages from "../../pages/login";

/// <reference types="cypress" />

describe('Login de la pag de la utn', () => {
  beforeEach(() => {
    cy.visit('https://www.frc.utn.edu.ar');
  });

  it('Logueo valido', () => {
    const login = new LoginPages();
    login.getInicioSesion().click();
    login.getTxtName().type("113493");
    login.getSelect().select("tecnicatura"); 
    login.getPassword().type("ContraseñaFalsa"); // modificada para subir a Git
    login.getBtnEnviar().click();

  });


it('Logueo Invalido', () => {
  const login = new LoginPages();
  login.getInicioSesion().click();
  login.getTxtName().type("113493");
  login.getSelect().select("tecnicatura");
  login.getPassword().type("Winance+2");
  login.getBtnEnviar().click();

});

});