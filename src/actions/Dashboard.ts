import {browser, ExpectedConditions as EC} from "protractor";
import {dashboadPage} from "../pageObjects/dashboard.page";
import * as chai from 'chai';
import * as chaiString from 'chai-string';
import * as chaiAsPromised from 'chai-as-promised';

const cChai = chai.use(chaiString);
const customChai = cChai.use(chaiAsPromised);
const expect = customChai.expect;

export class Dashboard{

    public async logout() {
        await browser.wait(EC.visibilityOf(dashboadPage.profileIcon),
            5000, 'Profile icon is not visible.');
        await dashboadPage.openProfileIcon();
        await browser.wait(EC.visibilityOf(dashboadPage.logoutText),
            5000, 'Profile icon is not visible.');
        await dashboadPage.clickLogoutText();
        await browser.wait(EC.visibilityOf(dashboadPage.logoutButton),
            5000, 'Profile icon is not visible.');
        await dashboadPage.clickOnLogoutButton();
    }

    public async waitUntilAtlassianIconAvailable() {
        await browser.wait(EC.visibilityOf(dashboadPage.homePage), 15000, 'Main page should be visible');
    }

    public async isHomePageUp() {
        expect(dashboadPage.getTextOfHomePageIcon()).to.eventually.equal('Atlassian.com');
    }
}
