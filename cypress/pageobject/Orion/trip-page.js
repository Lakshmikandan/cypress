class TripPage {
    constructor() {
        this.property = 'value';
    }

    clickAddTrip(){
        cy.get('.icon.add').click();
    }

    validateTripPageisDisplayed(){
        cy.get('.md.ion-page.hydrated',{timeout: 10000}).should('exist');
    }
}

export default new TripPage();