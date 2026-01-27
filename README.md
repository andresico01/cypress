# Cypress E2E Automation Project

This project contains End-to-End tests developed with Cypress for automated web testing.

## Description

This automation suite is configured to run tests against the [League of Legends](https://www.leagueoflegends.com/) website. It includes examples of common Cypress commands and a basic structure for organizing test files, selectors, and reusable tasks.

## Getting Started

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) and npm installed on your machine.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running the following command:
   ```bash
   npm install
   ```

## Running the Tests

To run the tests, you can use the Cypress Test Runner. Open it with the following command:

```bash
npx cypress open
```

This will open the Cypress interface, where you can see and run all the test files (`.cy.js`) found in the `cypress/e2e` directory.

## Project Structure

The project follows the standard Cypress folder structure:

- **`cypress/`**
  - **`e2e/`**: Contains the actual test files (`.cy.js`). The file `checkElementHome.cy.js` has tests for the home page.
  - **`fixtures/`**: Used to store test data that can be used in the tests. `example.json` is the default fixture file.
  - **`support/`**: Contains reusable code, custom commands, and global configurations.
    - `commands.js`: Here you can add or overwrite Cypress commands.
    - `e2e.js`: This file is executed before each test file.
    - **`questions/`**: Custom folder for reusable assertion functions.
    - **`tasks/`**: Custom folder for reusable sequences of actions or tasks.
    - **`ui/`**: Custom folder to store UI element selectors.
- **`cypress.config.js`**: Main Cypress configuration file. Here you can set the `baseUrl`, viewport size, and other global settings.
- **`package.json`**: Lists the project's dependencies and scripts.
- **`webpack.config.js`**: Webpack configuration for preprocessing files.
