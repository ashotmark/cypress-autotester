export const isHomePage = () => {
    cy.location('pathname').should('eq', '/Home');
    cy.contains("Welcome to PracticumFit!").should('be.visible');
}