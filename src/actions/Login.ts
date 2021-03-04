import {loginPage} from '../pageObjects/login.page';
import {browser, ExpectedConditions as EC} from "protractor";
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const customChai = chai.use(chaiAsPromised), expect = customChai.expect;

export class Login {

    public async loadLoginPage(){
        await loginPage.loadLoginPage();
    }

    public async waitUtilLoginPageLoaded(){
        // const currentURL = await browser.getCurrentUrl();
        await browser.wait(EC.elementToBeClickable(loginPage.usernameField),
            5000,
            'Username field should be clickable.');
    }

    async sendUsername(username) {
        await loginPage.typeIntoUsernameField(username);
        await loginPage.clickNextStepForLogin();
    }

    async waitUntilPasswordFieldIsVisible() {
        await browser.wait(EC.elementToBeClickable(loginPage.passwordField), 5000, 'Password field should be clickable.');
    }

    async typeAndSendPassword(password) {
        await loginPage.typeIntoPasswordField(password);
        await loginPage.clickNextStepForLogin();
    }

    async startGoogleAuthentication() {
        await loginPage.clickOnGoogleLoginButton();
    }

    async checkErrorMessage(message) {
        browser.wait(EC.visibilityOf(loginPage.loginError), 5000, 'Login error field is not visible.');
        expect(await loginPage.loginErrorText()).to.be.not.empty;
    }
}