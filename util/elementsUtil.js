class ElementsUtil {
  randomString() {
    let r = Math.random()
      .toString(36)
      .substring(7);
    return r;
  }

  doClick(element) {
    element.waitForDisplayed();
    element.click();
  }

  doSetValues(element, value) {
    element.waitForDisplayed();
    element.setValue(value);
  }

  doAddValue(element, value) {
    element.waitForDisplayed();
    element.addValue(value);
  }

  doGetText(element) {
    element.waitForDisplayed();
    return element.getText();
  }

  doIsDisplayed(element) {
    element.waitForDisplayed();
    return element.isDisplayed();
  }

  selectRadioButton(element) {
    element.waitForDisplayed();
    element.click();
  }

  doGetPageTitle(pageTitle) {
    browser.waitUntil(
      () => {
        return browser.getTitle() === pageTitle;
      },
      10000,
      "Title is not Display in given Time Frame"
    );
    return browser.getTitle();
  }
}

module.exports = new ElementsUtil();
