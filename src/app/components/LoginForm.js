export const loginWith = ({email, password}) => {
    cy.get('input[name="email"]').should("be.visible").type(email).blur();
    cy.get('input[name="password"]').should("be.visible").type(password).blur();
    cy.get('button[type="submit"]').should("be.visible").click();
}