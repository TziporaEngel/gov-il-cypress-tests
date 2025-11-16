# Gov.il Cypress Tests

This project contains automated end-to-end tests for the Gov.il website using [Cypress](https://www.cypress.io/).

## ✅ Features
- Page Object Model (POM) structure for better maintainability.
- Tests for the search component in the header.
- Request interception using `cy.intercept` and status code validation.
- Dynamic checks for service URLs and response data manipulation.

## ✅ Project Structure
```
cypress/
├── e2e/
│   ├── pageObjects/    # Page Object Model files
│   └── tests/          # Test cases
├── fixtures/           # Test data
├── support/            # Custom commands and config
```

## ✅ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/gov-il-cypress-tests.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## ✅ Run Tests
- Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```
- Run all tests in headless mode:
   ```bash
   npx cypress run
   ```

## ✅ Tech Stack
- [Cypress](https://www.cypress.io/)
- JavaScript (ES6)
