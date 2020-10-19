describe('e2e general test', () => {
  it('successfully loads the application', () => {
    cy.visit('http://localhost:3000');
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('checks for basic content in the view', () => {
    cy.get('header');
    cy.get('main');
    cy.get('label').contains('Add the url');
    cy.get('button').should('be.disabled');
  });

  it('enters wrong URL in the input', () => {
    // Fills the input
    cy.get('input')
      .type('https://google.com')
      .should('have.value', 'https://google.com');

    // Clicks the button, validator does its job, label text changes
    cy.get('button').click();
    cy.get('label').contains('Sorry, but this is not a link what we want.');
  });

  it('enters right URL in the input', () => {
    // Fills the input
    cy.get('input')
      .type('https://sigma-rail.com/iNhg.gif')
      .should('have.value', 'https://sigma-rail.com/iNhg.gif');

    // Clicks the button, validator does its job, label text changes
    cy.get('button').click();
    cy.get('label').contains('Thanks, we will do the magic!');
  });

  it('reaches the final screen', () => {
    // Fills the input, clicks the button
    cy.get('input').type('https://sigma-rail.com/iNhg.gif');
    cy.get('button').click();

    // waits for the API response (lets try 6s?), checks we got the cats counter
    cy.wait(6000);
    cy.get('#cats-counter').contains('cats detected');
  });
});
