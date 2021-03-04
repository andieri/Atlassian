import {After, Given, Then, When} from '@cucumber/cucumber';
import {browser} from 'protractor';
import {Login} from "../actions/Login";
import {Dashboard} from "../actions/Dashboard";

const login = new Login(),
    dashboad = new Dashboard();

After(async () => {
    const currentURL = await browser.getCurrentUrl();
    if (currentURL.startsWith('https://start.atlassian.com/')) {
        await dashboad.logout();
    }
    if (currentURL.startsWith('https://id.atlassian.com/signup')) {
        await login.loadLoginPage();
    }
});

Given('I open the Login page of Atlassian', async () => {
    await login.loadLoginPage();
    await login.waitUtilLoginPageLoaded();
});

Given('I start the login process with my email', async () => {
    await login.sendUsername(browser.params.plain.user);
    await login.waitUntilPasswordFieldIsVisible();
});

When('I log into Atlassian with my correct password', async () => {
    await login.typeAndSendPassword(browser.params.plain.password);
});

When('I log into Atlassian with my incorrect password', async () => {
    await login.typeAndSendPassword(browser.params.plain.password + '_');
});

Then('I get an error message with {string}', async (message) => {
    await login.checkErrorMessage(message);
});

When('I start the login process with unknown email', async () => {
    await login.sendUsername(browser.params.plain.user + 'm');
});

