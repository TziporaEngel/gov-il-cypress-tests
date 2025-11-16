import SearchPage from '../pageObjects/searchPage';

describe('Gov.il Search Tests', () => {
    beforeEach(() => {
        cy.intercept('GET', '**', (req) => {
            req.headers['User-Agent'] = 'Mozilla/5.0 Cypress Test';
            req.headers['Referer'] = 'https://www.gov.il';
        });

        cy.visit('/');
    });

    it('Search for "appointment"', () => {
        SearchPage.performSearch('appointment');
        cy.url().should('include', 'appointment');
    });

    it('Search for "passport"', () => {
        SearchPage.performSearch('passport');
        cy.contains('דרכון').should('exist');
    });

    it('Autocomplete', () => {
        SearchPage.searchInput().type('דרכ');
        cy.get('#searchSuggestions').should('contain.text', 'דרכון');
    });
});