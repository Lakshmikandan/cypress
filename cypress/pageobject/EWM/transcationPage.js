class TranscationPage {
  enterTranscationCode(transcationCode) {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find("#ToolbarOkCode")
          .should("be.visible")
          .type(transcationCode);
      });
  }

  ClickExecuteBtn() {
    cy.get("iframe#ITSFRAME1", { timeout: 50000 })
      .its("0.contentDocument")
      .should("exist")
      .then((doc) => {
        cy.wrap(doc.body)
          .find('[id="M0:36::btn[0]-r"]')
          .should("be.visible")
          .click();
      });
  }

  navigateToTranscations(transcationCode) {
    this.enterTranscationCode(transcationCode);
    this.ClickExecuteBtn();
    cy.wait(5000);
  }

}
export default new TranscationPage();
