import {CreateTask} from '@utils/imageEvidence'


export const setMony = CreateTask('Insertar dinero',(elementSelector,keyWord) => {
    cy.log(`Thinking: Insertar monto de dinero con selector ${elementSelector} que tienen en su valor {${keyWord}} y sea visible...`)
      cy.get(elementSelector).
      filter(':visible').
      type(keyWord)
       
      
});


export const enter = CreateTask('Precionar enter',(elementSelector) => {
    cy.log(`Thinking: Dar enter en el elemnto: ${elementSelector} y es visible...`)
      cy.get(elementSelector) 
      .filter(':visible')            
      .click()
      
})

export const checkSuccessMessage = CreateTask('Verificar mensaje de exito',() => {
  
        cy.log('Se valida el mensaje de exito').should
        .get(UI.TEXTO_EXITOSO)
        .should('be.visible');
        cy.get(UI.MESSAGE_SUCCESS).should('have.text', '¡Conversión Exitosa!');
        cy.get(UI.CONVERSION_RESULT).should('have.text', `Nuevo balance: ${expectedAmount} USDC`);

})