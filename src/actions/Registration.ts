import {registrationPage} from '../pageObjects/registration.page';
import {browser, ExpectedConditions as EC} from "protractor";
import * as chai from 'chai';
import * as chaiString from 'chai-string';
import * as chaiAsPromised from 'chai-as-promised';

const cChai = chai.use(chaiString);
const customChai = cChai.use(chaiAsPromised);
const expect = customChai.expect;

export class Registration{

    async waitUntilRegistrationFormIsVisible() {
        await browser.wait(EC.visibilityOf(registrationPage.displayName), 5000, 'Registration from is not visible');
    }

    async isRegistrationUp() {
        expect(await registrationPage.getRegistrationFormHeaderText()).to.equal('Sign up for your account');
    }
}
