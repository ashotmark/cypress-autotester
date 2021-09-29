import {loginWith} from "../components/LoginForm";

export const isLoginPage = () => {
    cy.location('pathname').should('eq', '/login');
}

export const testLoginPage = ({email, password}) => {
    cy.get("form").within(() => {
        loginWith({email, password});
    });
}