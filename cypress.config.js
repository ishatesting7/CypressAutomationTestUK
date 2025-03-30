const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalWebKitSupport:true,
  watchForFileChanges:false,
  // pageLoadTimeout:4000,
  // video:true,
  // screenshotOnRunFailure:true

  e2e: {
    baseUrl:"https://ecommerce-playground.lambdatest.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
