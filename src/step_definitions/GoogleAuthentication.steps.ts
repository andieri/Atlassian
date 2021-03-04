import {Given, When} from "@cucumber/cucumber";
import {browser} from "protractor";
import {Login} from "../actions/Login";

import {GoogleAuthentication} from "../actions/GoogleAuthentication";

const login = new Login(),
    googleAuth = new GoogleAuthentication();

Given('I start the login process with my Google account', async () => {
    await login.startGoogleAuthentication();
    await googleAuth.waitAndSendUsername(browser.params.google.username);
});

When('I log into Google with my correct Google password', async () => {
    await googleAuth.waitAndSendPassword(browser.params.google.password);
});