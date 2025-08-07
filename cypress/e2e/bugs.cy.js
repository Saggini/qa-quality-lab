describe('QA QualityLab - Frontend', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/frontend/index.html'); // Ajuste o caminho conforme a pasta
  });

  it('Deve carregar a lista de bugs', () => {
    cy.get('ul#lista-bugs').should('exist');
  });

  it('Deve cadastrar um novo bug', () => {
    cy.get('#titulo').type('Bug via Cypress');
    cy.get('#descricao').type('Esse bug foi criado pelo Cypress');
    cy.get('#status').select('Aberto');
    cy.get('#prioridade').select('Alta');
    cy.get('form').submit();

    cy.contains('Bug via Cypress').should('exist');
  });
});