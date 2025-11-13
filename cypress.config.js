const { defineConfig } = require('cypress');
const path = require('path');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    // ✅ Base URL can switch dynamically via environment variable (e.g., staging/prod)
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://automationexercise.com/',

    // ✅ Test file pattern
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // ✅ Global support file for hooks and commands
    supportFile: 'cypress/support/e2e.js',

    // ✅ Register plugin events
    setupNodeEvents(on, config) {
      // Initialize Allure plugin
      allureWriter(on, config);

      // Return the modified config to Cypress
      return config;
    },

    // ✅ Reporter configuration
    reporter: 'spec',

    // ✅ Environment variables for Allure integration
    env: {
      allure: true,
      allureResultsPath: 'allure-results',
      allureReuseAfterSpec: true
    },

    // ✅ Optional: Disable video recording to save CI resources
    video: false
  }
});
