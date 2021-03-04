import {browser, by, element} from "protractor";

class LoginPage{

  usernameField = element(by.css('input#username'));
  passwordField = element(by.css('input#password'));
  loginSubmit = element(by.css('button#login-submit'));
  loginError = element(by.css('#login-error > span'));
  googleLogin = element(by.css('button#google-auth-button'));

  public async typeIntoUsernameField(username:string){
    await this.usernameField.sendKeys(username);
  }

  public async typeIntoPasswordField(password:string){
    await this.passwordField.sendKeys(password);
  }

  public async clickNextStepForLogin(){
    await this.loginSubmit.click();
  }

  public async submitLogin(){
    await this.loginSubmit.click();
  }

  public async loginErrorText(){
    await this.loginError.getText();
  }

  public async clickOnGoogleLoginButton(){
    await this.googleLogin.click();
  }

  public async loadLoginPage(){
    await browser.get('https://id.atlassian.com/login');
  }
}
export const loginPage = new LoginPage();