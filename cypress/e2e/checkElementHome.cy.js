import * as HomeUI from '@ui/homeTarget'

import * as Quest from '@questions/elementQuest' 

import * as Tasks from '@tasks/homeTask'



const HISTORY = 'HISTORIAS';
const NEWS = 'Noticias';
const FREE_ALIAS = 'gratisElement';
const NOW_ALIAS = 'ahoraElement';



describe('Mi primera prueba en Cypress', () => {
    beforeEach(()=>{
        cy.visit('es-es');
        
    })

    it('ejemplo nuevo task creada para cy', () => {
        const secretValue = Cypress.env('secret_value');
        cy.get('[data-testid="card-category"]')
        .contains('Actualizaciones del juego')
        .centerElement()
        .evidence('Screenshot perfecto y centrado');

        cy.log(`El valor secreto es: ${secretValue}`);

    });

    it('buscar elementos en pag lol', () => {
        Quest.ElementExit(HomeUI.JUGAR_GRATIS);
        Quest.ElementVisible(HomeUI.JUGAR_GRATIS);
        Quest.CheckImageType(HomeUI.IMAGE_POPPY,'jpg');
        Quest.VisibleText(HomeUI.ASSASIN_AKALY,'La Asesina Sigilosa');
        Tasks.ElementCount(HomeUI.DIVS_ELEMENT,'Jugar gratis',FREE_ALIAS);
        Tasks.ElementCount(HomeUI.DIVS_ELEMENT,'Jugar ahora',NOW_ALIAS);
        Quest.CheckElementNumber(NOW_ALIAS,3) ;
        Quest.CheckElementNumber(FREE_ALIAS,2);

    });

    it('buscar elementos en listas', () => {
        Quest.VisibleText(HomeUI.NOTICIAS_LIST,NEWS);
        Quest.ElementNotVisible(HomeUI.NOTICIAS_ELEMENT,HISTORY);
        Quest.ElementNotExit(HomeUI.NOTICIAS_ELEMENT,'PATRICIO');
        Tasks.showList(HomeUI.NOTICIAS_LIST,NEWS);
        Quest.VisibleText(HomeUI.NOTICIAS_ELEMENT,HISTORY);
    });
  
  

  
});