var ASN_Number;
class monitorPage {
  enterWhsrNo(Whse_No) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body).find('[id="M1:46:::0:34"]').clear().type(Whse_No);
      });
  }

  enterMonitor(Monitor) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body).find('[id="M1:46:::1:34"]').clear().type(Monitor);
      });
  }
  clickExecute() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body).find('[id="M1:37::btn[8]"]').click();
      });
  }

  exbandInbount() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="tree\\#C122\\#2\\#1"] .urCursorClickable')
          .click();
        cy.wait(5000);
      });
  }

  dblClickIbound() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body).find('[id="tree\\#C122\\#3\\#1\\#1\\#i"]').dblclick();
      });
  }

  navigateToIbound() {
    this.exbandInbount();
    this.dblClickIbound();
  }

  enterPONumber(poNumber) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M1:46:::40:34"]')
          .scrollIntoView()
          .type(poNumber);
      });
  }

  clickExcuteInPopUp() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body).find('[id="M1:37::btn[8]"]').click();
        cy.wait(5000);
      });
  }

  findASNNumber() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="grid\\#C125\\#1\\,2\\#if"]')
          .should("be.visible")
          .invoke("text")
          .then((text) => {
            cy.log("text", +text);
            ASN_Number = text;
            cy.readFile("cypress/fixtures/testdata.json").then((data) => {
              // Step 3: Update the JSON object with the new value
              data.ASN_Number = text.trim(); // Replace 'ASN_Number' with your key
              cy.writeFile("cypress/fixtures/testdata.json", data).then(() => {
                // Step 5: Read the updated value from the JSON file
                cy.readFile("cypress/fixtures/testdata.json").then(
                  (updatedData) => {
                    // Log the updated value to verify it was written correctly
                    cy.log("Updated ASN Number:", updatedData.ASN_Number);

                    // Now you can use updatedData.asnNumber in further tests
                    expect(updatedData.ASN_Number).to.equal(text.trim());
                  }
                );
              });
            });
          });
      });
  }

  navigateToMenu(Whse_No, Monitor) {
    this.enterWhsrNo(Whse_No);
    this.enterMonitor(Monitor);
    this.clickExecute();
  }

  navigateToInboundMenu() {
    this.navigateToIbound();
    this.dblClickIbound();
  }

  getASNNumber(poNumber) {
    this.enterPONumber(poNumber);
    this.clickExcuteInPopUp();
    this.findASNNumber();
  }

  clickASNFirstRow() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="grid\\#C125\\#1\\,0"] .urST5SCMetricInner')
          .click();
        cy.wait(8000);
      });
  }

  ClickWhseOrderBtn() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="C125_toolbar_btn4"]')
          .should("be.visible", { timeout: 5000 })
          .click({ force: true });
        cy.wait(10000);

        cy.wrap(doc.body)
          .find("#popupButtonSync")
          .then(($popup) => {
            if ($popup.length > 0) {
              cy.wrap($popup).click();
              cy.wait(3000);

              cy.wrap(doc.body)
                .find('[id="C125_toolbar_btn4"]')
                .should("be.visible", { timeout: 5000 })
                .click({ force: true });
              cy.wait(1000);
            }
          });
      });
  }

  findWhseOrder() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
    .its("0.contentDocument")
    .should("exist")
    .then((doc) => {
      cy.wrap(doc.body)
          .find(
            'tr.lsCondensed.urST5SelColUiMulti>td:nth-child(1) tbody>tr.urST4RowFirstVisible>td:nth-child(2) [role="textbox"]'
          )
          .should("be.visible")
          .invoke("text")
          .then((text) => {
            cy.log("text", +text);
            cy.readFile("cypress/fixtures/testdata.json").then((data) => {
              // Step 3: Update the JSON object with the new value
              data.Whse_Order = text.trim(); // Replace 'Whse_Order' with your key
              cy.writeFile("cypress/fixtures/testdata.json", data).then(() => {
                // Step 5: Read the updated value from the JSON file
                cy.readFile("cypress/fixtures/testdata.json").then(
                  (updatedData) => {
                    // Log the updated value to verify it was written correctly
                    cy.log("Updated Whse_Order:", updatedData.Whse_Order);

                    // Now you can use updatedData.asnNumber in further tests
                    expect(updatedData.Whse_Order).to.equal(text.trim());
                  }
                );
              });
            });
          });

        cy.wait(1000);
    });
  }

  getWhseOrder() {
    this.clickASNFirstRow();
    this.ClickWhseOrderBtn();
   this.findWhseOrder();
  }
}

export default new monitorPage();
