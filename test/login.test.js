const loginPage = require("../pages/login.page");
const configData = require("../config");
const constants = require("../constants");

describe("Login to app.hyphen application using verification code", () => {
  it("Verify Page Title", () => {
    browser.url("/");
    browser.maximizeWindow();
    const title = loginPage.getPageTitle();

    console.log("Login Page Title is : ", title);

    assert.equal(constants.LOGIN_PAGE_TITLE, title, "Title Not Found!!");
    browser.pause(5000);
  });

  it("Verify the Login Feature", () => {
    loginPage.doLogin(configData.emailAddress);

    browser.pause(5000);
  });

  it("Verify Verification Code", () => {
    loginPage.doVerify(configData.verificationCode);
    browser.pause(5000);
  });
});
