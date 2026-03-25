


export const setMony = (elementSelector,keyWord) => {
    cy.log(`Thinking: Insertar monto de dinero con selector ${elementSelector} que tienen en su valor {${keyWord}} y sea visible...`)
      cy.get(elementSelector).
      filter(':visible').
      type(keyWord)
       
      
}


export const enter = (elementSelector) => {
    cy.log(`Thinking: Dar enter en el elemnto: ${elementSelector} y es visible...`)
      cy.get(elementSelector) 
      .filter(':visible')            
      .click()
      
}