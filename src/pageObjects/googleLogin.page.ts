import {by, element} from "protractor";

class GoogleLoginPage{

  usernameField = element(by.css('input#identifierId'));
  passwordField = element(by.css('input[name="password"]'));
  loginButton = element(by.css('div#passwordNext button[type="button"]'));

  public async typeIntoUsernameField(username:string){
    return this.usernameField.sendKeys(username);
  }

  public async typeIntoPasswordField(password:string){
    return this.passwordField.sendKeys(password);
  }

  public async clickOnLogin(){
    return this.loginButton.click();
  }

}

export const googleLoginPage = new GoogleLoginPage();
