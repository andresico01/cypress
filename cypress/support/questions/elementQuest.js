import {CreateTask} from '@utils/imageEvidence'
import * as UI from "@ui/moneyTest";

/**
     * Verify the element exist in the DOM .
     *
     * @example
     * ✅ IDs: ElementExit('#mi-boton')
     * ✅ Clases: ElementExit('.btn-primary')
     * ✅ Atributos: ElementExit('[data-testid="login"]')
     * ✅ Combinaciones: ElementExit('form > div input[name="user"]')
     */
export const ElementExit = CreateTask('Verificar que el elemento exista',(elementSelector) => {
    cy.log(`Thinking: Verificando que el elemento ${elementSelector} ya existe...`);
    return cy.get(elementSelector)
    .scrollIntoView({ block: 'center', inline: 'center' })
    .first()
    .should('exist');
});

/**
     * Verify the element not exist in the DOM .
     *
     * @example
     * ✅ IDs: ElementExit('#mi-boton')
     * ✅ Clases: ElementExit('.btn-primary')
     * ✅ Atributos: ElementExit('[data-testid="login"]')
     * ✅ Combinaciones: ElementExit('form > div input[name="user"]')
     */
export const ElementNotExit = (elementSelector,textElement) => {
    cy.log(`Thinking: Verificando que el elemento ${elementSelector} no existe...`);
    return cy.get(elementSelector)
    .contains(textElement)
    .should('not.exist');
}


/**
     * Verify the element is visible in the DOM .
     * @example
     * ✅ IDs: ElementVisible('#mi-boton')
     * ✅ Clases: ElementVisible('.btn-primary')
     * ✅ Atributos: ElementVisible('[data-testid="login"]')
     * ✅ Combinaciones: ElementVisible('form > div input[name="user"]')
     * ✅ Alias: ElementVisible(AliasDefinido)
     */
export const ElementVisible = CreateTask('Verificar que el elemento sea visible',(elementSelector) => {
     cy.log(`Thinking: Verificando que el elemento ${elementSelector} es visible ...`);
     return cy.get(elementSelector)
     .scrollIntoView({ block: 'center', inline: 'center' })
     .first()
     .should('be.visible');
});

/**
     * Verify the element is not visible in the DOM .
     *
     * @example
     * ✅ IDs: ElementNotVisible('#mi-boton')
     * ✅ Clases: ElementNotVisible('.btn-primary')
     * ✅ Atributos: ElementNotVisible('[data-testid="login"]')
     * ✅ Combinaciones: ElementNotVisible('form > div input[name="user"]')
     * ✅ Alias: ElementNotVisible(AliasDefinido)
     */
export const ElementNotVisible = (elementSelector,textElement) => {
     cy.log(`Thinking: Verificando que el elemento ${elementSelector} no es visible ...`);
     return cy.get(elementSelector)
     .contains(textElement)
     .should('not.be.visible');
}

/**
     * Verify the text is visible in the DOM .
     *
     * @example
     * ✅ IDs: VisibleText('#mi-boton',keyWord)
     * ✅ Clases: VisibleText('.btn-primary',keyWord)
     * ✅ Atributos: VisibleText('[data-testid="login"]',keyWord)
     * ✅ Combinaciones: VisibleText('form > div input[name="user"]',keyWord)
     */
export const VisibleText = CreateTask('Verificar que el texto sea visible',(elementSelector,keyWord) => {
     cy.log(`Thinking: Verificando que el elemento ${elementSelector} contenga el texto {${keyWord}} y sea visible...`);
     return cy.get(elementSelector)
     .contains(keyWord)
     .first()
     .scrollIntoView({ block: 'center', inline: 'center' })
     .should('be.visible');
});

/**
     * Verify the element type image is visible in the DOM .
     *
     * @example
     * ✅ IDs: CheckImageTipy('#mi-boton',imageType)
     * ✅ Clases: CheckImageTipy('.btn-primary',imageType)
     * ✅ Atributos: CheckImageTipy('[data-testid="login"]',imageType)
     * ✅ Combinaciones: CheckImageTipy('form > div input[name="user"]',imageType)
     */
export const CheckImageType = CreateTask('Verificar que el elemento sea una imagen de tipo',(elementSelector, imageType ) => {
     cy.log(`Thinking: Verificando que el elemento ${elementSelector} sea una imagen de tipo {${imageType}} y sea visible...`);

     cy.get(elementSelector)
     .should('be.visible') 
     .and('have.attr', 'src') 
     .and('include', imageType);
});

/**
     * Verify the number of the same element type image is visible in the DOM .
     * @example
     * ✅ Alias: CheckElementNumber(aliasNumberElement,expectedNumber)
     * the value for aliasNumberElement have to come without @ in the variable value 
     */
export const CheckElementNumber = (Alias, numberElement ) => {
     cy.log(`Thinking: Verificando que el numero de elementos visibles sea el correcto ...`)
     cy.get(`@${Alias}`)
     .should('equal',numberElement);
}

export const checkSuccessMessage = CreateTask('Verificar mensaje de exito',(expectedAmount) => {
  
        cy.log('Se valida el mensaje de exito');
        cy.get(UI.TEXTO_EXITOSO)
        .should('be.visible');
        cy.get(UI.MESSAGE_SUCCESS).should('have.text', '¡Conversión Exitosa!');
        cy.get(UI.CONVERSION_RESULT).should('have.text', `Nuevo balance: ${expectedAmount} USDC`);

})

