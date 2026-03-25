import * as UI from "@ui/moneyTest";
import * as MoneyTask from "@tasks/moneyTask";


const AMOUNT = 100;
const BALANCE_TOTAL = 1000;

describe('Prueba de tareas con variables de ambiente', () => {
  

    
    beforeEach(()=>{
    cy.visit('http://localhost:5173/');

    

});

it('entramos en pag principal de conversor de monedas',()=>{
            
        MoneyTask.setMony(UI.ENTRADA_DINERO,AMOUNT);
        MoneyTask.enter(UI.ENTER_BOTON);

        let expectedAmount = BALANCE_TOTAL - AMOUNT; 

        cy.get(UI.TEXTO_EXITOSO).should('be.visible');
        cy.get(UI.MESSAGE_SUCCESS).should('have.text', '¡Conversión Exitosa!');
        cy.get(UI.CONVERSION_RESULT).should('contain.text', `Monto convertido: ${expectedAmount.toFixed(2)} COP`);
        


     
        });


})

