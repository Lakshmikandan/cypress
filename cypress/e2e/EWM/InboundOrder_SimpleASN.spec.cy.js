let testData, loginData, transcationData, ASN_Number;
import ewmLogin from "../../pageobject/EWM/loginPage";
import ewmTransction from "../../pageobject/EWM/transcationPage";
import ewmSimpleASN from "../../pageobject/EWM/simpleASNPage";
import ewmMonitor from "../../pageobject/EWM/monitorPage";
import ewmRFGun from "../../pageobject/EWM/RFGunPage";

describe("Inbound Order with Simple ASN", () => {
  beforeEach(() => {
    //Load Test Date
    cy.fixture("testData.json").then((data) => {
      testData = data;
    });

    //Load test data for login details
    cy.fixture("loginData.json").then((login) => {
      loginData = login;
    });

    //Load test data for Transcation details
    cy.fixture("transcation.json").then((transcation) => {
      transcationData = transcation;
    });
  });

  it("Login with EWM Application with valid user", () => {
    ewmLogin.navigateToEWMApplication();
    ewmLogin.LoginWithValidUser(loginData.userName, loginData.password);
  });

  /*it("Navigate to Simple ASN tool and generate ASN Number ", () => {
    ewmTransction.navigateToTranscations(transcationData.simpleASN);
    ewmSimpleASN.selectionCriteriaInSimpleASN(
      testData.Whse_No,
      testData.poNumber
    );
    ewmSimpleASN.selectPOOrVendor();
    ewmSimpleASN.enterASNQty(testData.ASN_Qty);
    ewmSimpleASN.enterBOLNumber(testData.poNumber);
    ewmSimpleASN.enterASNNumber(testData.poNumber);
    ewmSimpleASN.selectPOOrVendor();
    cy.wait(1000);
  });*/

  /* it("Navigate to Monitor and get ASN Number ", () => {
    ewmTransction.navigateToTranscations(transcationData.Monitor);
    ewmMonitor.navigateToMenu(testData.Whse_No, testData.Monitor);
    ewmMonitor.navigateToIbound();
    ewmMonitor.getASNNumber(testData.poNumber);
  });

  it("Navigate to RF gun and do the unload", () => {
    let ASN_Number;
    cy.readFile('cypress/fixtures/testdata.json').then((data) => {
      // Log the updated value to verify it was written correctly
     
      cy.log('Updated ASN Number in RF gun:', data.ASN_Number);
      ewmTransction.navigateToTranscations(transcationData.RFGun);
      ewmRFGun.navigateToMainMenu(
        testData.Whse_No,
        loginData.userName,
        testData.DefPresDvc
      );
      ewmRFGun.navigateToUnloadOrReturn();
      ewmRFGun.navigateToScanner( data.ASN_Number, testData.printer);
      ewmRFGun.scanProductForUnload(testData.UPC, testData.ASN_Qty);
    });
   
  });*/

   it("Navigate to Monitor and get the document number", () => {
    ewmTransction.navigateToTranscations(transcationData.Monitor);
    ewmMonitor.navigateToMenu(testData.Whse_No, testData.Monitor);
    ewmMonitor.navigateToIbound();
    ewmMonitor.getASNNumber(testData.poNumber);
    ewmMonitor.getWhseOrder();
  });

  it("Navigate to RF gun and do the Putaway", () => {
    cy.readFile('cypress/fixtures/testdata.json').then((data) => {
      // Log the updated value to verify it was written correctly
     
      cy.log('Updated ASN Number in RF gun:', data.Whse_Order);
    ewmTransction.navigateToTranscations(transcationData.RFGun);
    ewmRFGun.navigateToMainMenu(
      testData.Whse_No,
      loginData.userName,
      testData.DefPresDvc
    );
    ewmRFGun.navigateToPutAwayByWO();

    ewmRFGun.scanProductForPutAwaybyWo(
      data.Whse_Order,
      testData.article_No,
      testData.ASN_Qty,
      testData.bin
    );
  });

    /*cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find("#ToolbarOkCode")
          .should("be.visible")
          .type("/n/scwm/rfui");
        cy.wrap(doc.body)
          .find('[id="M0:36::btn[0]-r"]')
          .should("be.visible")
          .click();

        //Enter Whse No#, Resource(LXM8ORY)
        cy.wrap(doc.body)
          .find('[id="M0:46:1::0:11"]')
          .clear()
          .type(testData.Whse_No);
        cy.wrap(doc.body)
          .find('[id="M0:46:1::1:11"]')
          .clear()
          .type(loginData.userName);
        cy.wrap(doc.body)
          .find('[id="M0:46:1::2:11"]')
          .click()
          .type(testData.DefPresDvc)
          .type(`{enter}`);

        cy.wait(5000);
        //Navigage to 02 Inbound Process , 03 Putaway
        cy.wrap(doc.body)
          .find('[id="M0:46:1::1:0"] [id="M0:46:1::1:0-cnt"] span', {
            timeout: 2000,
          })
          .should("have.text", "02 Inbound Process")
          .click({ force: true });
        cy.wait(3000);
        cy.wrap(doc.body)
          .find('[id ="M0:46:1::2:0"] [id ="M0:46:1::2:0-cnt"] span')
          .should("have.text", "03 Putaway")
          .click({ force: true });
        cy.wait(3000);
        cy.wrap(doc.body)
          .find('[id="M0:46:1::0:0"] [id="M0:46:1::0:0-cnt"] span')
          .should("have.text", "01 Putaway by WO")
          .click({ force: true });
        cy.wait(3000);

        cy.wrap(doc.body)
          .find('[id="M0:46:1::0:12"]')
          .should("be.visible")
          .type(testData.Whse_Order)
          .type(`{enter}`);
        cy.wait(1000);

        cy.wrap(doc.body)
          .find('[id="M0:46:1::1:20"]')
          .should("be.visible")
          .type(testData.article_No)
          .type(`{enter}`);
        cy.wait(4000);
        cy.wrap(doc.body)
          .find('[id="M0:46:1::3:16"]')
          .should("be.visible", { timeout: 3000 })
          .type(testData.ASN_Qty)
          .type(`{enter}`);
        cy.wait(7000);
        cy.wrap(doc.body)
          .find('[id="M0\\:46\\:1\\:\\:4\\:9"]', { timeout: 3000 })
          .should("exist")
          .should("match", "input")
          .should("be.visible")
          .should("have.attr", "readonly") // Wait until the value is set
          .then(($el) => {
            cy.wrap($el)
              .invoke("val")
              .should("not.be.empty")
              .then((inputValue) => {
                cy.log("Input Value:", inputValue);
              });
          });

        cy.wait(4000);
        cy.wrap(doc.body)
          .find('[id="M0:46:1::4:28"]')
          .should("be.visible")
          .type(testData.bin)
          .type(`{enter}`);
        cy.wait(10000);
        cy.reload();
        cy.wait(30000);
      });*/
  });

  /*it("Navigate to Monitor and get the document number", () => {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find("#ToolbarOkCode")
          .should("be.visible")
          .type("/n/scwm/mon");
        cy.wrap(doc.body)
          .find('[id="M0:36::btn[0]-r"]')
          .should("be.visible")
          .click();

        //Enter Warehouse Number, Monitor
        cy.wrap(doc.body)
          .find('[id="M1:46:::0:34"]')
          .clear()
          .type(testData.Whse_No);
        cy.wrap(doc.body)
          .find('[id="M1:46:::1:34"]')
          .clear()
          .type(testData.Monitor);
        cy.wrap(doc.body).find('[id="M1:37::btn[8]"]').click();
        cy.wrap(doc.body)
          .find('[id="tree\\#C122\\#2\\#1"] .urCursorClickable')
          .click();
        cy.wait(5000);
        cy.wrap(doc.body).find('[id="tree\\#C122\\#3\\#1\\#1\\#i"]').dblclick();

        cy.wrap(doc.body)
          .find('[id="M1:46:::40:34"]')
          .scrollIntoView()
          .type(testData.poNumber);
        cy.wrap(doc.body).find('[id="M1:37::btn[8]"]').click();
        cy.wait(5000);

        cy.wrap(doc.body)
          .find(
            '[id="C125-content"] tr.lsCondensed.urST5SelColUiMulti .lsSTVertBrd [id="grid\\#C125\\#1\\,17\\#if"]'
          )
          .should("exist")
          .scrollIntoView()
          .click({ force: true })
          .should("be.visible");

        cy.wrap(doc.body)
          .find('[id="grid\\#C125\\#1\\,0"] .urST5SCMetricInner')
          .click();
        cy.wait(8000);

        cy.wrap(doc.body)
          .find(
            '[id="C125-content"] tr.lsCondensed.urST5SelColUiMulti .lsSTVertBrd [id="grid\\#C125\\#1\\,17\\#if"]'
          )
          .should("exist")
          .invoke("text")
          .then((text) => {
            cy.log("text", +text);
            //testData.status = text;
          });

        cy.pause();
      });
  });*/
});
