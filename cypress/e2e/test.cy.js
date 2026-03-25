import * as UI from "@ui/moneyTest";
import * as MoneyTask from "@tasks/moneyTask";
import {checkSuccessMessage} from "@questions/elementQuest";


const AMOUNT = 100;
const BALANCE_TOTAL = 1000;

describe('Prueba de tareas con variables de ambiente', () => {
  

    
    beforeEach(()=>{
    cy.visit('http://localhost:5173/');

    

});

it('entramos en pag principal de conversor de monedas',()=>{
            

        let expectedAmount = BALANCE_TOTAL - AMOUNT; 
        MoneyTask.setMony(UI.ENTRADA_DINERO,AMOUNT);
        MoneyTask.enter(UI.ENTER_BOTON);
        checkSuccessMessage(expectedAmount);
        
     
        });


})

