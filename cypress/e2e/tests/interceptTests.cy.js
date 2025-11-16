describe('Intercept requests on branches page', () => {
  it('Checks 3 API calls return status 200', () => {
    cy.intercept('GET', '**/BureausIndexResources**').as('resources');
    cy.intercept('GET', '**/GetAggregationForOffices**').as('offices');
    cy.intercept('GET', '**/GetAggregationCategories**').as('categories');

    cy.visit('https://www.gov.il/he/government-service-branches');

    cy.wait('@resources').its('response.statusCode').should('eq', 200);
    cy.wait('@offices').its('response.statusCode').should('eq', 200);
    cy.wait('@categories').its('response.statusCode').should('eq', 200);
  });
});