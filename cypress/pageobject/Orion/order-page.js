import "cypress-shadow-dom"

class OrderPage  {
    enterUserName(){
        cy.get('input#inputUsername').type('tms1000');
    }

    selectOrderDropdown(){
        cy.get('div.mat-mdc-menu-content>div:nth-child(2) .value').click();
    }

    selectDropdown(){
        cy.intercept('GET', 'https://orion-qa.np-osc.homedepot.ca/dispatcher/dropdown').as('getDropdown');
        cy.wait('@getDropdown');
        cy.get('.md.ion-page.hydrated',{timeout:10000}).should('be.visible');
        console.log('first shadow')
       /* cy.get('.md.ion-page.hydrated>ion-router-outlet', {timeout: 10000})
        .shadow()
        .within(() => {
            cy.get('app-role-root>ion-router-outlet', {timeout:5000})
            .shadow()
            .within(() =>{
                cy.get('.home-container.md.hydrated')
                .shadow()
                .within(()=>{
                    cy.get('.card.table-container.md.hydrated')
                    .shadow()
                    .within(()=>{
                        cy.get('.selector.ion-inherit-color.md.hydrated').click();
                    })
                })
            });
        });*/
        //cy.get('ion-card ion-card-header.selector').click();
    }
}

export default new OrderPage()