# Cypress E2E Automation Project

Este proyecto contiene pruebas de extremo a extremo desarrolladas con Cypress para pruebas web automatizadas.

## Description

Esta suite de automatización está configurada para ejecutar pruebas en el sitio local [http://localhost:5173]. Incluye ejemplos de comandos comunes de Cypress, una estructura básica para organizar archivos de prueba, selectores y tareas reutilizables.

También incluye configuraciones personalizadas para:
* **Informes centralizados:** Los informes HTML y las capturas de pantalla se consolidan en un solo directorio.
* **Crear una función personalizada para cy:** Función personalizada que nos permite tomar una foto en el paso que necesitamos.
* **Desplazamiento inteligente:** Algoritmos personalizados para gestionar elementos no desplazables.
* **Alias ​​de Webpack:** Importaciones simplificadas mediante `@tasks`, `@ui`, etc.

## Empezando

# ##Requisitos previos

Necesita tener Node.js y npm instalados en su equipo.

### Instalación

1. Clone el repositorio en su equipo local.
2. Vaya al directorio del proyecto.
3. Instale las dependencias necesarias ejecutando el siguiente comando:
    ```bash
    npm install o npm ci
    ```
## Ejecución de las pruebas

Para ejecutar las pruebas, puede usar alguno de estos dos comandos.:
    ```bash o powershell
    npx cypress run --browser chrome --headless --spec 'cypress/e2e/test.cy.js'
    o 
    npm run test-prueba
    ```

Esto abrirá la interfaz de Cypress, donde podrá ver y ejecutar todos los archivos de prueba (`.cy.js`) que se encuentran en el directorio `cypress/e2e` al terminar ejecucion se guarda reporte en ruta `{Ruta local}\cypress\evidencia\reporte\index.html`