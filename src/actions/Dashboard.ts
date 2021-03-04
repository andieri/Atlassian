import {browser, ExpectedConditions as EC} from "protractor";
import {dashboadPage} from "../pageObjects/dashboard.page";
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const customChai = chai.use(chaiAsPromised), expect = customChai.expect;


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
        const text = await dashboadPage.getTextOfHomePageIcon();
        expect(text).to.equal('Atlassian.com');
    }
}