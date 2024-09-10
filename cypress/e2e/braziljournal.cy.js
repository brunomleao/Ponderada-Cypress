describe('Testando o site do Brazil Journal', () => {
  it('Deve carregar a página do Brazil Journal e verificar o título', () => {
    // Acessa o site do Brazil Journal
    cy.visit('https://braziljournal.com');

    // Verifica o título da página
    cy.title().should('include', 'Brazil Journal');
  });

  it('Deve verificar se há manchetes de notícias na página principal', () => {
    // Acessa o site do Brazil Journal
    cy.visit('https://braziljournal.com');

    // Verifica se os títulos das notícias estão visíveis
    cy.get('.boxarticle-infos-title a').should('be.visible');
  });
});
