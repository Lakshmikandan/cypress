class SimpleASNPage {
  enterWhseNo(Whse_No) {
    cy.get("iframe#ITSFRAME1")
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body).find('[id="M0:46:::3:34"]').type(Whse_No);
      });
  }

  enterPONumber(poNumber) {
    cy.get("iframe#ITSFRAME1")
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body).find('[id="M0:46:::4:34"]').type(poNumber);
      });
  }
  ClickExecute() {
    cy.get("iframe#ITSFRAME1")
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:37::btn[8]"]')
          .should("be.visible")
          .click();
        cy.wait(5000);
      });
  }

  selectionCriteriaInSimpleASN(WhseNo, poNumber) {
    this.enterWhseNo(WhseNo);
    this.enterPONumber(poNumber);
    this.ClickExecute();
  }

  selectfirstRow() {
    cy.get("iframe#ITSFRAME1")
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find(
            '#userpanel [class="urSpTA"]>tbody>tr>td:nth-child(1) [class="lsCondensed urST5SelColUiMulti"] .lsSTSepBrdRightSel tbody .urST5SCMetricInner',
            { timeout: 5000 }
          )
          .should("be.visible")
          .click();
      });
    cy.wait(4000);
  }

  ClickSimpleASNBtn() {
    cy.get("iframe#ITSFRAME1")
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:37::btn[6]"]')
          .should("be.visible")
          .click();
      });

    cy.wait(10000);
  }

  selectPOOrVendor() {
    this.selectfirstRow();
    this.ClickSimpleASNBtn();
  }

  enterASNQty(ASN_Qty) {
    cy.get("iframe#ITSFRAME1")
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        // Enter the Qty
        cy.wrap(doc.body)
          .find('span[id="grid\\#C135\\#1\\,9\\#if\\-r"]')
          .scrollIntoView()
          .click();

        cy.wrap(doc.body)
          .find('span[id="grid\\#C135\\#1\\,9\\#if\\-r"] input')
          .should("be.visible")
          .type(ASN_Qty, { delay: 100 });
      });
  }

  enterBOLNumber(BOLNumber) {
    cy.get("iframe#ITSFRAME1")
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        // Enter BOL Number
        cy.wrap(doc.body)
          .find('span[id="grid\\#C135\\#1\\,10\\#if\\-r"]')
          .scrollIntoView()
          .click();
        cy.wait(5000);

        cy.wrap(doc.body)
          .find('span[id="grid\\#C135\\#1\\,10\\#if\\-r"] input')
          .should("be.visible")
          .type(BOLNumber, { delay: 500 });
      });
  }

  enterASNNumber(ASNNumber) {
    cy.get("iframe#ITSFRAME1")
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        // Enter the ASN Number
        cy.wrap(doc.body)
          .find('span[id="grid\\#C135\\#1\\,11\\#if\\-r"]')
          .scrollIntoView()
          .click();
        cy.wait(5000);

        cy.wrap(doc.body)
          .find('span[id="grid\\#C135\\#1\\,11\\#if\\-r"] input')
          .should("be.visible")
          .type(ASNNumber, { delay: 500 });
        cy.wait(5000);
      });
  }
}

export default new SimpleASNPage();
