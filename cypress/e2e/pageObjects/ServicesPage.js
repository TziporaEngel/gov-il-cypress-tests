class ServicesPage {
  appointmentButtons() {
    return cy.get('button.btn-secondary-40px');
  }

  clickAppointmentButton(index) {
    this.appointmentButtons().eq(index).click();
  }

  verifyAppointmentUrl() {
    cy.url().should('include', 'appointment');
  }

  clickAndVerify(index) {
    this.clickAppointmentButton(index);
    this.verifyAppointmentUrl();
    cy.go('back');
    cy.wait(1000);
  }
}

export default new ServicesPage();