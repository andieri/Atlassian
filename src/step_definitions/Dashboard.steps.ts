import {Then} from "@cucumber/cucumber";
import {Dashboard} from "../actions/Dashboard";

const dashboad = new Dashboard();

Then('I see the Atlassian dashboard', {timeout: -1}, async () => {
    await dashboad.waitUntilAtlassianIconAvailable();
    await dashboad.isHomePageUp();
});
