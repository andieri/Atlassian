import {googleLoginPage} from "../pageObjects/googleLogin.page";
import {browser, ExpectedConditions as EC, Key} from "protractor";

export class GoogleAuthentication{

    async waitAndSendUsername(username) {
        await browser.wait(EC.visibilityOf(googleLoginPage.usernameField), 5000, 'Google login form is not visible.');
        await googleLoginPage.typeIntoUsernameField(username);
        await googleLoginPage.typeIntoUsernameField(Key.ENTER);
    }

    async waitAndSendPassword(password) {
        await browser.wait(EC.visibilityOf(googleLoginPage.passwordField), 5000, 'Google password field form is not visible.');
        await googleLoginPage.typeIntoPasswordField(password);
        await googleLoginPage.clickOnLogin();
    }
}