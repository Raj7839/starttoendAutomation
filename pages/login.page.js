const elementUtil = require("../util/ElementsUtil.js");
const constants = require("../constants");

class LoginPage {
  //Page Locators
  get emailAddress() {
    return $("input#inputGroupField");
  }

  get verificationCode() {
    return $("input#inputGroupField");
  }

  get sendCode() {
    return $(
      ".btn.btn-primary.hyphenButton.ladda-button.loginButton > .ladda-label"
    );
  }

  get submitBtn() {
    return $("form > .btn.btn-primary.hyphenButton");
  }

  //Page Actions

  getPageTitle() {
    return elementUtil.doGetPageTitle(constants.LOGIN_PAGE_TITLE);
  }

  doLogin(emailID) {
    elementUtil.doSetValues(this.emailAddress, emailID);
    elementUtil.doClick(this.sendCode);
    // elementUtil.doSetValues(this.verificationCode, veriCode);
    // elementUtil.doClick(this.submitBtn);

    // this.getPageTitle();
  }

  doVerify(veriCode) {
    elementUtil.doSetValues(this.verificationCode, veriCode);
    elementUtil.doClick(this.submitBtn);
  }
}

module.exports = new LoginPage();
