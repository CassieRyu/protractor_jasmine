'use strict'

class BrowserActions {

    click(element, timeout = 5 * 1000) {
        return this.waitForElementToBeClickable(element, timeout).then(() => {
            return element.click();
        });
    }

    waitForElementToBeClickable(element, timeout = 5 * 1000) {
        return browser.wait(EC.visibilityOf(element), timeout).then(() => {
            return browser.wait(EC.elementToBeClickable(element), timeout);
        });
    }

    sendKeys(element, text, timeout = 5 * 1000) {
        return this.waitForElementToBeClickable(element, timeout).then(() => {
            return element.clear().then(() => {
                return element.sendKeys(text);
            });
        });
    }
}

module.exports = new BrowserActions();