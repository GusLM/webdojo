describe("Links abrindo nova guia/janela", () => {
  it("Validando o atributo do link do instagram", () => {
    cy.start();
    cy.submitLoginForm("papito@webdojo.com", "katana123");

    cy.get('[data-cy="instagram-link"]')
      .should("have.attr", "target", "_blank")
      .and("have.attr", "href", "https://www.instagram.com/qapapito");
  });

  it.only("Acessando o link dos termos de uso removendo o target", () => {
    cy.start();
    cy.submitLoginForm("papito@webdojo.com", "katana123");

    cy.contains("Formulários").click();

    cy.contains("a", "termos de uso").invoke("removeAttr", "target").click();

    cy.contains("1. Aceitação dos Termos").should("be.visible");
  });
});
