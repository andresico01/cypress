const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'evidencia/reporte', 
    charts: true,             // Gráficos bonitos
    reportPageTitle: 'Reporte de Pruebas',
    embeddedScreenshots: true, // Fotos incrustadas (vital para compartir)
    inlineAssets: true,        // Todo en un solo HTML
  },
  retries: {
    runMode: 2, 
    openMode: 0 
  },
  e2e: {
    screenshotsFolder: 'evidencia/screenshots',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--disable-gpu');
        }
        return launchOptions;
      });
      const options = {
        webpackOptions: require('./webpack.config.js'),
        watchOptions: {},
      };
      on('file:preprocessor', webpackPreprocessor(options));
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    
    baseUrl: 'https://www.leagueoflegends.com/', // Tu URL
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false // Importante para evitar líos de cross-origin
  },
});