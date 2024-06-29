const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // All requests we send go to this API endpoint
    baseUrl: 'http://localhost:8080/v1/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
