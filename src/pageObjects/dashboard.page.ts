import {by, element} from "protractor";

class DashboardPage{

  profileIcon = element(by.css('div#root div > button[data-testid=nav__profile-menu-trigger]'));
  logoutText = element(by.css('button[data-testid=nav__logout-btn]'));
  logoutButton = element(by.css('button#logout-submit'));
  homePage = element(by.cssContainingText('div#root a > button > div > div > span', 'Atlassian.com'));

  public async openProfileIcon(){
    return this.profileIcon.click();
  }
  public async clickLogoutText(){
    return this.logoutText.click();
  }
  public async clickOnLogoutButton(){
    return this.logoutButton.click();
  }
  public async getTextOfHomePageIcon(){
    return this.homePage.getText();
  }

}
export const dashboadPage = new DashboardPage();
