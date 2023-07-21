class MercadoLibreLocators {
    constructor() {     
        this.busquedaArticulo="[id='cb1-edit']";
        this.buscar="[class=nav-search-btn]";
        this.aceptarCookies="[data-testid = 'action:understood-button']"

    }
  }
  
  export default class MercadoLibrePages {
    constructor() {
      this.locators = new MercadoLibreLocators();
    }
  
    getBuscar(){
      return cy.get(this.locators.buscar);
    }
  
    getBusquedaArticulo(){
      return cy.get(this.locators.busquedaArticulo);
    }  
    getAceptarCookies(){
      return cy.get(this.locators.aceptarCookies);
    }  

  }
  