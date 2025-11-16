class SearchPage {
  searchInput() {
    return cy.get('input#SearchInput');
  }

  searchButton() {
    return cy.get('button#btnSearch'); 
  }

  

  performSearch(term) {
    this.searchInput().type(term);
    this.searchButton().click();
  }
}

export default new SearchPage();