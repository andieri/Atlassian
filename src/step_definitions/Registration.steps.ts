import {Then} from "@cucumber/cucumber";

import {Registration} from "../actions/Registration";

const registration = new Registration();

Then('I see the register from of Atlassian', async () => {
    await registration.waitUntilRegistrationFormIsVisible();
    await registration.isRegistrationUp();
});