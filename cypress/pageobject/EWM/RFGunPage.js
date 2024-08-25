class RFGunPage {
  enterWhseNumber(whseNo) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body).find('[id="M0:46:1::0:11"]').clear().type(whseNo);
      });
  }

  enterResource(resource) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body).find('[id="M0:46:1::1:11"]').clear().type(resource);
      });
  }

  enterDefPresDvc(DefPresDvc) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::2:11"]')
          .clear()
          .type(DefPresDvc)
          .type(`{enter}`);

        cy.wait(5000);
      });
  }

  navigateToMainMenu(whseNo, resource, defPres) {
    this.enterWhseNumber(whseNo);
    this.enterResource(resource);
    this.enterDefPresDvc(defPres);
  }

  clickInboundProcess() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::1:0"] [id="M0:46:1::1:0-cnt"] span', {
            timeout: 2000,
          })
          .then((visible) => {
            if (visible.is(":visible")) {
              cy.wrap(doc.body)
                .find('[id="M0:46:1::1:0"] [id="M0:46:1::1:0-cnt"] span', {
                  timeout: 2000,
                })
                .should("have.text", "02 Inbound Process")
                .click({ force: true });
              cy.wait(3000);
            }
          });
      });
  }

  clickUnloadOrReturn() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id ="M0:46:1::1:0"] [id ="M0:46:1::1:0-cnt"] span')
          .should("have.text", "02 Unload/Return")
          .click({ force: true });
        cy.wait(5000);
      });
  }

  clickPutaway() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::1:0"] [id="M0:46:1::1:0-cnt"] span', {
            timeout: 2000,
          })
          .then((visible) => {
            if (visible.is(":visible")) {
              cy.wrap(doc.body)
                .find('[id ="M0:46:1::2:0"] [id ="M0:46:1::2:0-cnt"] span')
                .should("have.text", "03 Putaway")
                .click({ force: true });
              cy.wait(3000);
            }
          });
      });
  }

  clickPutawayByWO() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::1:0"] [id="M0:46:1::1:0-cnt"] span', {
            timeout: 2000,
          })
          .then((visible) => {
            if (visible.is(":visible")) {
              cy.wrap(doc.body)
                .find('[id="M0:46:1::0:0"] [id="M0:46:1::0:0-cnt"] span')
                .should("have.text", "01 Putaway by WO")
                .click({ force: true });
              cy.wait(3000);
            }
          });
      });
  }

  clickDFCUnloadOrDFCReturn() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::0:0"] [id="M0:46:1::0:0-cnt"] span')
          .should("have.text", "01 DFC Unload/DFC Return")
          .click({ force: true });
        cy.wait(3000);
      });
  }

  navigateToUnloadOrReturn() {
    this.clickInboundProcess();
    this.clickUnloadOrReturn();
    this.clickDFCUnloadOrDFCReturn();
  }

  navigateToPutAwayByWO() {
    this.clickInboundProcess();
    this.clickPutaway();
    this.clickPutawayByWO();
  }

  enterWhseOrder(Whse_Order) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::0:12"]')
          .should("be.visible")
          .type(Whse_Order)
          .type(`{enter}`);
        cy.wait(1000);
      });
  }

  enterArticleNo(article_No) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::1:20"]')
          .should("be.visible")
          .type(article_No)
          .type(`{enter}`);
        cy.wait(4000);
      });
  }

  enterASNQtyForPutAway(ASN_Qty) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::3:16"]')
          .should("be.visible", { timeout: 3000 })
          .type(ASN_Qty)
          .type(`{enter}`);
        cy.wait(7000);
      });
  }

  enterBin(bin) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::4:28"]')
          .should("be.visible")
          .type(bin)
          .type(`{enter}`);
        cy.wait(10000);
        cy.reload();
        cy.wait(30000);
      });
  }

  enterTUorDoororASNNumber(ASN_Number) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::1:12"]')
          .should("be.visible")
          .type(ASN_Number)
          .type(`{enter}`);
        cy.wait(6000);
      });
  }

  enterPrinter(printer) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::3:12-r"] [id="M0:46:1::3:12"]')
          .should("exist")
          .should("be.visible")
          .click()
          .type(printer)
          .type(`{enter}`);
      });
  }

  navigateToScanner(ASN_Number, printer) {
    this.enterTUorDoororASNNumber(ASN_Number);
    this.enterPrinter(printer);
  }

  enterUPCCode(UPCCode) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::1:9"]')
          .type(UPCCode)
          .type(`{enter}`);
        cy.wait(3000);
      });
  }

  enterASNQty(ASN_Qty) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:1::4:30"]')
          .should("be.visible")
          .type(ASN_Qty)
          .type(`{enter}`);
        cy.wait(8000);
      });
  }

  ClickF2ConfimBtn() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:46:::7:9"]')
          .should("have.text", "F2 Confi")
          .click({ force: true });

        cy.wait(10000);
        cy.reload();
        cy.wait(30000);
      });
  }

  scanProductForUnload(UPCCode, ASN_Qty) {
    this.enterUPCCode(UPCCode);
    this.enterASNQty(ASN_Qty);
    this.ClickF2ConfimBtn();
  }

  scanProductForPutAwaybyWo(Whse_Order, article_No, ASN_Qty, bin) {
    this.enterWhseOrder(Whse_Order);
    this.enterArticleNo(article_No);
    this.enterASNQtyForPutAway(ASN_Qty);
    cy.pause();
    this.enterBin(bin);
  }
}
export default new RFGunPage();
