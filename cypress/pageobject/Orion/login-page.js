class LoginPage {

 enterUserName(){
   cy.get('input#inputUsername').as('userName');
    //cy.get('input#inputUsername').type('tms1000');
    cy.get('@userName').type('tms1000');
 }

 enterPassword(){
   cy.get('input#inputPassword').as('password')
   //cy.get('input#inputPassword').type('TestMe123!');
   cy.get('@password').type('TestMe123!');
 }

 clickSignInButton(){
    cy.get('button#buttonSignOn').click();
 }
}

export default new LoginPage()