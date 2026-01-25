// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-real-events/support";
Cypress.on('uncaught:exception', (err, runnable) => {
  // Verificamos si el error contiene el mensaje que te está molestando
  if (err.message.includes('Could not clear consent from root domain')) {
    
    // Devolvemos 'false' para decirle a Cypress que NO falle el test
    return false;
  }
  
  
  // Si es otro error diferente, dejamos que Cypress falle (para enterarnos)
});