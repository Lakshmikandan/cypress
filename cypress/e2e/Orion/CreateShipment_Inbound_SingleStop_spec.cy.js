
import Loginpage from "../../pageobject/Orion/login-page";
import orderPage from "../../pageobject/Orion/order-page";
import tripPage from "../../pageobject/Orion/trip-page";

describe('Create Shipment Inbound SingleStop',() =>{
    before('launch Dispatch App',()=>{
        cy.visit('/', {headers: {"Accept-Encoding": "gzip, deflate, br"}});    
    }) 
    it('Login in dispatch app', ()=>{
        Loginpage.enterUserName();
        Loginpage.enterPassword();
        Loginpage.clickSignInButton();
        cy.wait(10000);
    })

    it('Select Order from dropdown',() => {
      
        tripPage.validateTripPageisDisplayed();
        //tripPage.clickAddTrip();
       // orderPage.selectDropdown();
       //orderPage.selectOrderDropdown();
    })
})