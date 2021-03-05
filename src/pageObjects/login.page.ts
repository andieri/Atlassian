import {browser, by, element} from "protractor";

class LoginPage{

  usernameField = element(by.css('input#username'));
  passwordField = element(by.css('input#password'));
  loginSubmit = element(by.css('button#login-submit'));
  loginError = element(by.css('div#login-error > span'));
  googleLogin = element(by.css('button#google-auth-button'));

  public async typeIntoUsernameField(username:string){
    return this.usernameField.sendKeys(username);
  }

  public async typeIntoPasswordField(password:string){
    return this.passwordField.sendKeys(password);
  }

  public async clickNextStepForLogin(){
    return this.loginSubmit.click();
  }

  public async submitLogin(){
    return this.loginSubmit.click();
  }

  public async loginErrorText(){
    return this.loginError.getText();
  }

  public async clickOnGoogleLoginButton(){
    return this.googleLogin.click();
  }

  public async loadLoginPage(){
    return browser.get('https://id.atlassian.com/login');
  }
}
export const loginPage = new LoginPage();
