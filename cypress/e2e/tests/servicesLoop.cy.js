import ServicesPage from '../pageObjects/ServicesPage';

describe('Verify appointment buttons', () => {
  beforeEach(() => {
    cy.intercept('GET', '**', (req) => {
      req.headers['User-Agent'] = 'Mozilla/5.0 Cypress Test';
      req.headers['Referer'] = 'https://www.gov.il';
    });

    cy.visit('https://govisit.gov.il/he/authorities/authority/262');
  });

  it('Click all appointment buttons and verify URL', () => {
    ServicesPage.appointmentButtons().each((_, index) => {
      ServicesPage.clickAndVerify(index);
    });
  });
});