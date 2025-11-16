class ServicesBannerPage {
  bannerImage() {
    return cy.get('.src_img_desktop img');
  }

  visitPrimeMinisterPage() {
    cy.visit('https://www.gov.il/he/departments/prime_ministers_office/govil-landing-page');
  }

  interceptPrimeMinisterBanner(newMainBanner) {
    cy.intercept('GET', 'https://www.gov.il/govil-landing-page-api/he/api/offices/get/prime_ministers_office', (req) => {
      req.reply((res) => {
        res.body.mainBanner = newMainBanner;
        return res;
      });
    }).as('modifiedResponse');
  }

  waitForIntercept() {
    cy.wait('@modifiedResponse');
  }

  verifyBannerImage(expectedSrc) {
    this.bannerImage().should('have.attr', 'src', expectedSrc);
  }
}

export default new ServicesBannerPage();