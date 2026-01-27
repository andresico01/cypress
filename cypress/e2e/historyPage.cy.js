import {
    NOTICIAS_LIST,
    NOTICIAS_ELEMENT
} from '@ui/homeTarget'

import {
    showList,
    click
} from '@tasks/homeTask'

import * as Tasks from '@tasks/historyTask'

import * as Ui from '@ui/historyTarget'



describe('Busqueda de la Pag History',()=>{
beforeEach(()=>{
    cy.visit('es-es');

});

    it('entramos en pag principal a busca la opcion de buscar historia',()=>{
        showList(NOTICIAS_LIST,'Noticias');
        click(NOTICIAS_ELEMENT,'HISTORIAS');
        Tasks.SearchElement(Ui.LORE_ASHE,Ui.BUTTON('VER MÁS'),'element');
        cy.get('@element').then(($enlace) => {
    
    // 1. Extraemos la URL del atributo 'href'
    const urlDestino = $enlace.attr('href');
    
    cy.log(`Thinking: Navegando manualmente a -> ${urlDestino}`);

    // 2. Navegamos directamente a esa URL (sin abrir pestañas nuevas)
    // Nota: Si la URL es relativa (/es-es/noticias...), cy.visit funciona perfecto.
    cy.visit(urlDestino);
});
    });

    
    
})