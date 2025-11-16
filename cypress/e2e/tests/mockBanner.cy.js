import ServicesBannerPage from '../pageObjects/ServicesBannerPage';

describe('Replace mainBanner using POM', () => {
  it('Should replace mainBanner image with data from another page', () => {
    cy.request('https://www.gov.il/govil-landing-page-api/he/api/offices/get/ministry_of_public_security')
      .then((secondPageResponse) => {
        const newMainBanner = secondPageResponse.body.mainBanner;

        ServicesBannerPage.interceptPrimeMinisterBanner(newMainBanner);
        ServicesBannerPage.visitPrimeMinisterPage();
        ServicesBannerPage.waitForIntercept();
        ServicesBannerPage.verifyBannerImage(newMainBanner.imgDesktop.src);
      });
  });
});

