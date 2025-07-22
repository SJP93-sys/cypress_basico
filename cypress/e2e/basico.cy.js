describe('pruebas TodoMVC', () => {
  
  it('Crear tarea y añadirla correctamente', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type('comprar el pan{enter}');
  });

  it('Filtrar tareas activas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type('comprar el pan{enter}');
    cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a').click();
  });

  it('Crear tarea de un sólo carácter y que no se añada a la lista', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type('comprar el pan{enter}')
    cy.get('[data-testid="text-input"]').type('comprar el arroz{enter}')
    cy.get('.todo-list li').should('have.length', 2);
    cy.get('.todo-list li').first().should('contain.text', 'comprar el pan');

  })


})