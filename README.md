# Cypress E2E Automation Project

Este proyecto contiene pruebas de extremo a extremo desarrolladas con Cypress para pruebas web automatizadas.

## Description

Esta suite de automatización está configurada para ejecutar pruebas en el sitio web de [League of Legends](https://www.leagueoflegends.com/). Incluye ejemplos de comandos comunes de Cypress, una estructura básica para organizar archivos de prueba, selectores y tareas reutilizables.

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

Para ejecutar las pruebas, puede usar Cypress Test Runner. Ábralo con el siguiente comando:
    ```bash
    npx cypress open
    ```

Esto abrirá la interfaz de Cypress, donde podrá ver y ejecutar todos los archivos de prueba (`.cy.js`) que se encuentran en el directorio `cypress/e2e` y ejecutar un script para ejecutar la prueba:

## Estructura del proyecto

El proyecto sigue la estructura de carpetas estándar de Cypress:
```
CypressProject/
│   .babelrc
│   .gitignore
│   cypress.config.js            # Configuración principal (URL base, tiempos de espera, reportero)
│   estructura.txt
│   jsconfig.json                # Configuración de Intellisense
│   package-lock.json
│   package.json                 # Dependencias y scripts
│   pipeline-ci.yaml             # Definición de pipeline de CI/CD
│   README-ENG.md
│   webpack.config.js            # Configuración de alias de ruta
|   
│
├── cypress/
│   ├── e2e/                     # Contiene los archivos de prueba reales (`.cy.js`).
│   │       checkElementHome.cy.js
│   │       historyPage.cy.js
│   │
│   ├── fixtures/                # Se utiliza para almacenar datos de prueba que se pueden usar en las pruebas. En este proyecto no se utiliza.
│   │       example.json
│   │
│   └── support/                 # Código de soporte y patrón de guión
│       │   commands.js          # Comandos personalizados (por ejemplo, cy.centerElement,cy.evidence)
│       │   e2e.js               # Hooks Globales       
│       │
│       ├── questions/           # Afirmaciones (Validaciones)
│       │       elementQuest.js
│       │
│       ├── tasks/               # Acciones (lógica de negocios)
│       │       historyTask.js
│       │       homeTask.js
│       │
│       ├── ui/                  # Selectores de UI (objetos de página)
│       │       historyTarget.js
│       │       homeTarget.js
│       │
│       └── utils/               # Ayudantes y envoltorios
│               imageEvidence.js
│
+---evidencia
|   +---reporte
|   |       index.html
|   |       
|   \---screenshots
|       +---checkElementHome.cy.js
|       \---historyPage.cy.js
\---readme
        htmlViewer.png
        pipelineExecution.png
        
```

## ⛓️ Integración de pipeline de CI/CD
El proyecto incluye un archivo pipeline-ci.yaml configurado para Azure DevOps.
Este archivo gestiona la configuración del entorno, la ejecución y la publicación de artefactos.
1. Ejecutar todos los casos de prueba.
2. Crear un informe.
3. Guardar el informe en la ejecución del pipeline.

* **ejecucion del pipeline:**
<p align="center">
  <img src="./readme/pipelineExecution.png" width="800" alt="Vista del Reporte HTML">
</p>

* **show report:**
<p align="center">
  <img src="./readme/htmlViewer.png" width="800" alt="Vista del Reporte HTML">
</p>

Este proyecto contiene pruebas de E2E desarrolladas con **Cypress**...
## **Autor**
Lead Team QC | QA & Test automation
LinkedIn: [https://www.linkedin.com/in/andresrojasdg/](https://www.linkedin.com/in/andresrojasdg/)


