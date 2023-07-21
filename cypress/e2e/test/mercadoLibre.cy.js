
import MercadoLibrePages from "../../pages/mercadoLibre";

/// <reference types="cypress" />

describe('Buesqueda de articulo en Mercado Libre', () => {
  beforeEach(() => {
    cy.visit('https://www.mercadolibre.com.ar/#from=homecom');
  });

  

  it('Busqueda de Notbook Gammer', () => {
    const mp = new MercadoLibrePages();  
    mp.getBusquedaArticulo().type("notebook gammer");
    mp.getBuscar().click();
    mp.getAceptarCookies().click();
    
    });

});