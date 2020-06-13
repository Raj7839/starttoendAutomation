const homePage = require("../pages/home.page");
const loginPage = require("../pages/login.page");
const constants = require("../constants");
const configData = require("../config");

describe("Testing End to End from login till creating Post  ", () => {
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

  it("Verify HomePage Title", () => {
    const title = homePage.getPageTitle();

    console.log("Home page title is : ", title);

    assert.equal(constants.HOME_PAGE_TITLE, title, "Title not found");
  });

  it("Verify clicking on the Create Post Button", () => {
    homePage.clickCreatePostBtn();
    const modalTitle = $(".modal-title").getText();
    assert.equal(
      "Create new post -Select type",
      modalTitle,
      "Modal Title Doesn't Match"
    );
    // homePage.selectRadioBtn();
    homePage.clickOpenButton();
    // browser.pause(5000);
    homePage.clkArrowBtn();

    // homePage.selectDropDown();
    browser.keys("ArrowDown");
    browser.keys("Enter");
    // homePage.selectDropDownValue();
    homePage.clickSelect();
    $("#textAreaField").addValue(homePage.randomString());
    //browser.addValue("#textAreaField", homePage.randomString());
    //homePage.writePost();
    homePage.clickPublishPost();

    browser.pause(5000);
  });
});
