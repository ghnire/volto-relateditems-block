context('Related Items Block', () => {
  describe('View related items', () => {
    beforeEach(() => {
      // add 2 documents
      cy.viewport('macbook-16');
      cy.createContent({
        contentType: 'Document',
        contentId: 'mexico',
        contentTitle: 'Mexico',
      });
      cy.createContent({
        contentType: 'Document',
        contentId: 'axoloto-sprint',
        contentTitle: 'Axoloto sprint',
      });
      cy.autologin();
    });

    describe('Page with a related item', function () {
      it('displays the related items', function () {
        // Edit page and add related item
        cy.visit('/');
        cy.navigate('/axoloto-sprint/edit');
        cy.get('#sidebar-metadata').scrollTo(0, 1000);
        cy.get('.field-wrapper-relatedItems button').click();
        cy.get('.sidebar-container .object-listing').contains('Mexico').click();
        // Add related items block
        cy.addNewBlock('related');
        cy.get('#toolbar-save').click();
        cy.get('.block.relatedItemsBlock').should('have.text', 'Mexico');
      });
    });
  });
});
