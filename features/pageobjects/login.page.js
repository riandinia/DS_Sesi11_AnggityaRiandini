const { $, expect } = require('@wdio/globals')
const Page = require('./page');

// Variable type = const xxx = variable that does not need changes
const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    buttonLogin: $('#login-button'),
    LockedOutUserError: (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)
}

    /**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async login (username) {
        console.log(`USERNAME: ${process.env.USERNAME_STANDARD_USER}`)
        console.log(`PASSWORD: ${process.env.PASSWORD_SAUCEDEMO}`)

        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.buttonLogin.click();
    }

    async validateLockedOutUserError (message) {
        await element.LockedOutUserError(message).waitForDisplayed({ timeout: 2500 })
        await expect(element.LockedOutUserError(message)).toBeDisplayed()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
        // by default, it's going to redirect the login page directly to https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();
