const elementUtil = require("../util/ElementsUtil.js");
const constants = require("../constants");

class HomePage {
  //Page Locators
  get createPostBtn() {
    return $("button#create-button");
  }

  //   get radioBtn1() {
  //     return $("label:nth-of-type(2) > .ant-radio > .ant-radio-input");
  //   }

  get openBtn() {
    return $(
      "/html//div[@id='modal-root-container']/div[@class='ReactModalPortal']/div/div/div[@class='modal-content']/div[@class='modal-body']/div/div[2]/div[@class='col-sm-4 col-xs-12']/button[@type='button']"
    );
  }

  get arrowBtn() {
    return $(".Select-arrow");
  }

  get dropDownInput() {
    return $("span#react-select-6--value > .Select-placeholder");
  }

  get dropDownValue() {
    return $("span#react-select-6--value-item");
  }

  get clkSelectBtn() {
    return $(".btn.btn-default.group-select-btn.hyphenButton");
  }

  get textArea() {
    return $("textarea#textAreaField");
  }

  get publishBtn() {
    return $("form > .btn.btn-default.hyphenButton.smallButton");
  }
  //Page Actions
  randomString() {
    let r = Math.random()
      .toString(36)
      .substring(7);
    return r;
  }

  getPageTitle() {
    return elementUtil.doGetPageTitle(constants.HOME_PAGE_TITLE);
  }

  clickCreatePostBtn() {
    elementUtil.doClick(this.createPostBtn);
  }
  selectRadioBtn() {
    elementUtil.doClick(this.radioBtn1);
  }

  clickOpenButton() {
    elementUtil.doClick(this.openBtn);
  }

  clkArrowBtn() {
    elementUtil.doClick(this.arrowBtn);
  }

  selectDropDown() {
    $(
      "/html/body/div[1]/div/div/div[2]/div[3]/div[3]/div/div[3]/div/div/div/div[2]/form/div[2]/div[1]/div/div/div[2]/div/div[1]/div[2]"
    ).click();
  }

  selectDropDownInput() {
    elementUtil.doClick(this.dropDownInput);
  }

  selectDropDownValue() {
    this.selectDropDownInput.elementUtil.doClick(this.dropDownValue);
  }

  clickSelect() {
    elementUtil.doClick(this.clkSelectBtn);
  }

  writePost() {
    elementUtil.doAddValue(this.textArea, this.randomString);
  }

  clickPublishPost() {
    elementUtil.doClick(this.publishBtn);
  }
}

module.exports = new HomePage();
