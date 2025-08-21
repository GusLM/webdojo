describe('Formulário de Consultoria', () => {
    it('Deve solicitar consultoria individual', () => {
        cy.start();
        cy.submitLoginForm('papito@webdojo.com', 'katana123');

        cy.goTo('Formulários', 'Consultoria');

        cy.get('input[placeholder="Digite seu nome completo"]').type('Fernando Papito');
        cy.get('input[placeholder="Digite seu email"]').type('papito@teste.com.br');
    });
});