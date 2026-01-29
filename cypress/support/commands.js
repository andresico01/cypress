// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js
// cypress/support/commands.js

Cypress.Commands.add('evidence', (nameTask) => {
  Cypress.log({
    name: '📸 TASK',
    message: nameTask,
  });


  cy.screenshot(`Task-${nameTask}`, { 
      capture: 'runner', 
      overwrite: false 
  });
});

Cypress.Commands.add('centerElement',{
  prevSubject: true
  }, (subject) => {
    cy.wrap(subject).then(($el) => {
      const top = $el.offset().top;
      const centerPosition = top - (Cypress.config('viewportHeight') / 2);
      cy.window().scrollTo(0, centerPosition, { duration: 0 });
      cy.wait(300); 
  })
  return cy.wrap(subject);
});

