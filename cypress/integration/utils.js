const fn = {
    login() {
        cy.get('#username')
            .type('andrei.doman@yahoo.com')
            .get('#password')
            .type('1234')
            .get('[data-cy="login-button"]').click()
            .wait(500)
    }
}
