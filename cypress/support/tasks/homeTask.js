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


export const showList = (elementSelector,textElement) => {
    cy.log(`Thinking: dar click sobre boton {${textElement}}`)
    cy.get(elementSelector).contains(textElement).realHover();

}    


export const click = (elementSelector,textElement) => {
    cy.log(`Thinking: dar click sobre boton {${textElement}}`)
    cy.get(elementSelector).contains(textElement).click();

}    

export const clickSubmenuOption = (optionText) => {
    cy.log(`Thinking: Clic forzado en la opción oculta {${optionText}}`);
    
    // { force: true } desactiva la comprobación de visibilidad.
    // Cypress buscará el enlace en el DOM (aunque esté display:none) y le dará clic.
    cy.contains('a', optionText).click({ force: true });
};


