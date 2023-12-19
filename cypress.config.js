const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  	baseUrl: `http://qa-classic.myshoptet.com.test`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
