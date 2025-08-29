import { realHover } from "cypress-real-events/commands/realHover";

describe('Simulando Mouseover', () => {
    it('Deve mostrar um texto ao passar o mouse em cima do link do instagram', () => {
        cy.start();
        cy.submitLoginForm('papito@webdojo.com', 'katana123');

        cy.contains('Isso é Mouseover!').should('not.exist')
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!').should('be.visible')

    });
});