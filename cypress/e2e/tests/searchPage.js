import SearchPage from '../pageObjects/searchPage';

describe('Gov.il Search Tests', () => {
    beforeEach(() => {
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

    it('Shows suggestion דרכון when typing דרכ', () => {
    SearchPage.searchInput().type('דרכ');
    cy.get('#searchSuggestions').should('contain.text', 'דרכון');
    });

});