import ServicesBannerPage from '../pageObjects/ServicesBannerPage';

describe('Replace mainBanner using POM', () => {
  it('Should replace mainBanner image with data from another page', () => {
    cy.request({
      method: 'GET',
      url: 'https://www.gov.il/govil-landing-page-api/he/api/offices/get/ministry_of_public_security',
      headers: {
        'User-Agent': 'Mozilla/5.0 Cypress Test',
        'Referer': 'https://www.gov.il',
      }
    }).then((secondPageResponse) => {
      const newMainBanner = secondPageResponse.body.mainBanner;

      ServicesBannerPage.interceptPrimeMinisterBanner(newMainBanner);
      ServicesBannerPage.visitPrimeMinisterPage();
      ServicesBannerPage.waitForIntercept();
      ServicesBannerPage.verifyBannerImage(newMainBanner.imgDesktop.src);
    });
  });
});
