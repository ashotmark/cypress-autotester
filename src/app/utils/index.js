export const firstVisit = (path = "/") => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
        win.sessionStorage.clear();
    });
    cy.server();
    cy.visit(path);
};
