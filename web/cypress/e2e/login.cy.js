describe("Login", () => {
  it("Deve realizar login com sucesso", () => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:3000");

    cy.get("#email").type("papito@webdojo.com");
    cy.get("#password").type("katana123");

    cy.contains("button", "Entrar").click();

    cy.get('[data-cy="user-name"]')
      .should("be.visible")
      .and("contain", "Fernando Papito");

    cy.get('[data-cy="welcome-message"]')
      .should("be.visible")
      .and(
        "contain",
        "Olá QA, esse é o seu Dojo para aprender Automação de Testes."
      );
  });

  it.only("Não deve realizar login com senha inválida", () => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:3000");

    cy.get("#email").type("papito@webdojo.com");
    cy.get("#password").type("katana321");

    cy.contains("button", "Entrar").click();

    cy.contains('Acesso negado! Tente novamente.')
      .should("be.visible")
  });
});
