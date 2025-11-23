// pages/login.js

export class LoginPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.loginButton   = page.locator('button[type="submit"]');
        this.flashMessage  = page.locator('#flash');
        this.logoutButton  = page.locator('a.button.secondary.radius');
        this.secureHeader  = page.locator('h2'); // "Secure Area"
    }

    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.page.waitForTimeout(200);
        await this.loginButton.click();
    }

    async logout() {
        await this.logoutButton.click();
    }
}
