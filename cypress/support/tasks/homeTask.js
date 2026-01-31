import {CreateTask} from '@utils/imageEvidence'

/**
     * count the number of element with the same text value and also same element.
     *
     * @example
     * ✅ IDs: ElementCount('#mi-boton',textValue,alias)
     * ✅ Clases: ElementCount('.btn-primary',textValue,alias)
     * ✅ Atributos: ElementCount('[data-testid="login"]',textValue,alias)
     * ✅ Combinaciones: ElementCount('form > div input[name="user"]',textValue,alias)
     */
export const ElementCount = (elementSelector,keyWord,alias) => {
    cy.log(`Thinking: encontrar numero de elementos ${elementSelector} que tienen en su texto {${keyWord}} y sea visible...`)
      cy.get(elementSelector) 
      .filter(`:contains(${keyWord})`) 
      .filter(':visible')            
      .its('length')
      .as(alias) 
      
}

/**
     * count the number of element with the same text value and also same element.
     *
     * @example
     * ✅ IDs: ElementCount('#mi-boton',textValue,alias)
     * ✅ Clases: ElementCount('.btn-primary',textValue,alias)
     * ✅ Atributos: ElementCount('[data-testid="login"]',textValue,alias)
     * ✅ Combinaciones: ElementCount('form > div input[name="user"]',textValue,alias)
     */
export const AliasForWebElement = (elementSelector,keyWord,alias) => {
    cy.log(`Thinking: encontrar numero de elementos ${elementSelector} que tienen en su texto {${keyWord}} y sea visible...`)
      cy.get(elementSelector) 
      .filter(`:contains(${keyWord})`) 
      .as(alias) 
      
}

/**
     * Show list of elements linked to webElement
     * @example
     * ✅ IDs: showList('#mi-boton',textValue)
     * ✅ Clases: showList('.btn-primary',textValue)
     * ✅ Atributos: showList('[data-testid="login"]',textValue)
     * ✅ Combinaciones: showList('form > div input[name="user"]',textValue)
     */
export const showList = CreateTask('Desplegar lista de opciones',(elementSelector,textElement) => {
    cy.log(`Thinking: dar click sobre boton {${textElement}}`)
    cy.get(elementSelector).contains(textElement).realHover();

});

/**
     * Click in a webElement
     * @example
     * ✅ IDs: click('#mi-boton',textValue)
     * ✅ Clases: click('.btn-primary',textValue)
     * ✅ Atributos: click('[data-testid="login"]',textValue)
     * ✅ Combinaciones: click('form > div input[name="user"]',textValue)
     */
export const click = (elementSelector,textElement) => {
    cy.log(`Thinking: dar click sobre boton {${textElement}}`)
    cy.get(elementSelector).contains(textElement).click();

}    



