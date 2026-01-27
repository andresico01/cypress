export const SearchElement = (textoBuscado,element,alias) => {
    const check = () => {
        cy.get('body').then(($body) => {
           
            if ($body.find(`:contains("${textoBuscado}"):visible`).length > 0) {
                cy.log('✅ ENCONTRADO!');
                cy.contains(textoBuscado).should('be.visible').as(alias);
                return; // Rompe el ciclo, éxito.
            }
            const hayMasBotones = $body.find(element).length > 0;

            if (hayMasBotones) {
                cy.log('🔄 Cargando más historias...');
                cy.contains('button', 'VER MÁS').click({ force: true });
                cy.wait(1000);
                check();    
            } else {
         
                throw new Error(`❌ Se acabó la lista y no apareció: "${textoBuscado}"`);
            }
        });
    };

    check();
};