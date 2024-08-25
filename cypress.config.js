const { defineConfig } = require("cypress");

module.exports = defineConfig({
   // These settings apply everywhere unless overridden
   defaultCommandTimeout: 25000,
   viewportWidth: 1000,
   viewportHeight: 600,
   // Viewport settings overridden for component tests
   component: {
     viewportWidth: 500,
     viewportHeight: 500,
   },

   e2e: {
    testIsolation: false,
    //"baseUrl" : "https://dev155.dev-gcp.homedepot.ca/en/home.html",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/EWM/InboundOrder_SimpleASN.spec.cy.js'
  },
});
