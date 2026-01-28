import { CreateTask } from "@utils/imageEvidence";

/**
     * Recursive function used to search a text within a webelement 
     * @example
     * ✅ IDs: SearchElement(searchText,'#mi-boton',alias)
     * ✅ Clases: SearchElement(searchText,'.btn-primary',alias)
     * ✅ Atributos: SearchElement(searchText,'[data-testid="login"]',alias)
     * ✅ Combinaciones: SearchElement(searchText,'form > div input[name="user"]',alias)
     */
export const SearchElement = (searchText,element,alias) => {
    const check = () => {
        cy.get('body').then(($body) => {
           
            if ($body.find(`:contains("${searchText}"):visible`).length > 0) {
                _checkImage(searchText,alias);
                
                return; 
            }
            const hayMasBotones = $body.find(element).length > 0;

            if (hayMasBotones) {
                _scrollClick()
                
                check();    
            } else {
         
                throw new Error(`❌ Se acabó la lista y no apareció: "${searchText}"`);
            }
        });
    };

    check();
};

const _checkImage = CreateTask('se encontre elemento con el texto',(searchText,alias)=>{
        cy.log('✅ ENCONTRADO!');
        cy.contains(searchText).scrollIntoView({ block: 'center', inline: 'center' }).should('be.visible').as(alias);
});

const _scrollClick = CreateTask('scroll and click',() => {
        cy.log('🔄 Cargando más historias...');
        cy.contains('button', 'VER MÁS').scrollIntoView({ block: 'center', inline: 'center' }).click({ scrollBehavior: 'center'});
});


export const falseClick = ($enlace) =>{
    const urlDestino = $enlace.attr('href');
    cy.log(`Thinking: Navegando manualmente a -> ${urlDestino}`);
    cy.visit(urlDestino);

}