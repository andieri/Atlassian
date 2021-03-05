import {by, element} from "protractor";

class RegistrationPage{
  registrationHeader = element(by.css('div#root h5'));
  displayName = element(by.css('input#displayName'));

  public async getRegistrationFormHeaderText(){
    return this.registrationHeader.getText();
  }

}
export const registrationPage = new RegistrationPage();
