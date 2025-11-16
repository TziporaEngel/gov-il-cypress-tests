const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    // baseUrl: 'https://www.gov.il',
    baseUrl: 'https://example.cypress.io',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});