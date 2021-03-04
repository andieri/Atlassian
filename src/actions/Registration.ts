import {registrationPage} from '../pageObjects/registration.page';
import {browser, ExpectedConditions as EC} from "protractor";
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const customChai = chai.use(chaiAsPromised), expect = customChai.expect;

export class Registration{

    async waitUntilRegistrationFormIsVisible() {
        await browser.wait(EC.visibilityOf(registrationPage.registrationHeader), 5000, 'Registration from is not visible');
    }

    async isRegistrationUp() {
        expect(await registrationPage.getRegistrationFormHeaderText()).to.be.equal('Sign up for your account');
    }
}