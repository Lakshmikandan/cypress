class homePage {

    enterArticle(){
        cy.visit('[type="search"]').should('exist').type();
    }

    clickSearch(){
        cy.visit('')
    }

}

export default new homePage();