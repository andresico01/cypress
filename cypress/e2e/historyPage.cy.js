import {
    NOTICIAS_LIST,
    NOTICIAS_ELEMENT
} from '@ui/homeTarget'

import {
    showList,
    click,
    
} from '@tasks/homeTask'

import * as Tasks from '@tasks/historyTask'

import * as Ui from '@ui/historyTarget'

import { ElementVisible, CheckImageType} from '@questions/elementQuest'




describe('Busqueda de la Pag History',()=>{
const ASHE_ALIAS = 'asheElement';
   
beforeEach(()=>{
    cy.visit('es-es');

});

    it('entramos en pag principal a busca la opcion de buscar historia',()=>{
        showList(NOTICIAS_LIST,'Noticias');
        click(NOTICIAS_ELEMENT,'HISTORIAS');
        Tasks.SearchElement(Ui.LORE_ASHE,Ui.BUTTON('VER MÁS'),ASHE_ALIAS);
        
           cy.get(`@${ASHE_ALIAS}`).then(($enlace) => {

                Tasks.falseClick($enlace);
                ElementVisible(Ui.ASHE_IMAGE);
                CheckImageType(Ui.ASHE_IMAGE,'jpg');
        
        });
    });

    
    
})