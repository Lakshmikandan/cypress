class LoginPage {

  navigateToEWMApplication(){
    cy.visit('https://vcqwmap01.homedepot.com:8443/sap/bc/personas/?sap-ie=edge');
  }
  enterUserName(userName) {
    cy.get("#sap-user").then(($userName) => {
      if ($userName.is(":visible")) {
        cy.wrap($userName).type(userName);
      }
    });
  }

  enterPassword(password) {
    cy.get("#sap-password").then(($password) => {
      if ($password.is(":visible")) {
        cy.wrap($password).type(password);
      }
    });
  }

  clickLogin() {
    cy.get("#LOGON_BUTTON").click();
  }

  LoginWithValidUser(userName, password) {
    this.enterUserName(userName);
    this.enterPassword(password);
    this.clickLogin();
    cy.wait(15000);
  }
}

export default new LoginPage();
