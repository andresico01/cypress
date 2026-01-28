export const CreateTask = (nameTask, logicTask) => {

    return (...args) => {
        logicTask(...args);
        cy.evidence(nameTask);        
    };
};