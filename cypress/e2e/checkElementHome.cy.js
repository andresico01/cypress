import * as HomeUI from '@ui/homeTarget'

import * as Quest from '@questions/elementQuest'

import * as Tasks from '@tasks/homeTask'


const WORD_SAVE = 'Guardar'; 
describe('Mi primera prueba en Cypress', () => {
    beforeEach(()=>{
        cy.visit('es-es');
        
    })

  it('buscar elementos en pag lol', () => {
   Quest.ElementExit(HomeUI.JUGAR_GRATIS);
   Quest.ElementVisible(HomeUI.JUGAR_GRATIS);
   Quest.VisibleText(HomeUI.BUTTON_GUARDAR,WORD_SAVE);
   Quest.CheckImageTipy(HomeUI.IMAGE_POPPY,'jpg');
   Quest.VisibleText(HomeUI.ASSASIN_AKALY,'La Asesina Sigilosa');
   Tasks.ElementCount(HomeUI.DIVS_ELEMENT,'Jugar gratis','gratisElement');
   Tasks.ElementCount(HomeUI.DIVS_ELEMENT,'Jugar ahora','ahoraElement');
   Quest.CheckElementNumber('ahoraElement',3) ;
   Quest.CheckElementNumber('gratisElement',2) ;

  });

  it('buscar elementos en listas', () => {
   Quest.VisibleText(HomeUI.NOTICIAS_LIST,'Noticias');
   Quest.ElementNotVisible(HomeUI.NOTICIAS_ELEMENT,'HISTORIAS');
   Quest.ElementNotExit(HomeUI.NOTICIAS_ELEMENT,'PATRICIO')
   Tasks.showList(HomeUI.NOTICIAS_LIST,'Noticias')

   Tasks.clickSubmenuOption('HISTORIAS');
  });

  
});