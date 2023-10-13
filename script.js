describe('TestingSorting', () => {
  it('Testing article', () => {
    cy.visit('http://localhost:3000');  // Adjust the URL if needed

    // Wait for the list to have at least 1 item
    cy.get('#bands li').should('have.length.at.least', 1);

    // Check if the list is sorted and without articles
    cy.get('#bands li').then(tags => {
      const tagContent = tags.map((index, tag) => Cypress.$(tag).text()).get();

      // Check if each tag is sorted and without articles
      const sortedContent = [...tagContent].sort();
      for (let i = 0; i < sortedContent.length; i++) {
        const sentence = sortedContent[i];
        expect(sentence).to.be.equal(tagContent[i]);
      }
    });
  });
});
