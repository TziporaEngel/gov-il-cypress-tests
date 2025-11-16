import ServicesPage from '../pageObjects/ServicesPage';

describe('Verify appointment buttons', () => {
  beforeEach(() => {
    cy.visit('https://govisit.gov.il/he/authorities/authority/262');
  });

  it('Click all appointment buttons and verify URL', () => {
    ServicesPage.appointmentButtons().each((_, index) => {
      ServicesPage.clickAndVerify(index);
    });
  });
});