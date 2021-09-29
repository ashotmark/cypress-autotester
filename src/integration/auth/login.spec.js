import {firstVisit} from "../../app/utils";
import {email, password} from "../../fixtures/login.json";
import {isLoginPage, testLoginPage} from "../../app/pages/LoginPage";
import {isHomePage} from "../../app/pages/HomePage";

describe('Login Test', () => {
    beforeEach(() => {
        firstVisit("/");
    });
    it('login flow', () => {
        isLoginPage();
        testLoginPage({email, password});
        isHomePage();
    })
})