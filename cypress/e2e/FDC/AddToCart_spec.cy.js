describe('Add to cart BOPI Item', () => {

  before(() =>{
    cy.session('Launch homedepot site',()=>{
      cy.visit('/',{
        headers: {
          "Accept-Encoding": "gzip, deflate, br"
        }
      })
      cy.get('#onetrust-accept-btn-handler',{timeout: 30000}).click();
      cy.get('button.acl-button--theme--primary',{timeout: 30000}).click();
    
    })
  })
  it('When I search BOPIS item',() => {
    cy.get('input.acl-input', {timeout: 30000}).type('1001705838');
    cy.get('button.acl-action-button').click()
  })
})