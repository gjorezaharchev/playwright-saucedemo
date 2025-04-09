import { expect, type Locator, type Page } from '@playwright/test';

export class SaucedemoLoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly login: Locator;
    readonly errormsg: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.login = page.locator('[data-test="login-button"]');
        this.errormsg = page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto(process.env.URL as string);
    }

    async typeUsername(user) {
        await this.username.fill(user);
    }

    async typePassword(pass) {
        await this.password.fill(pass);
    }

    async clickLogin() {
        await this.login.click();
    }

    async checkErrorMsg(msg) {
        await expect(this.errormsg).toContainText(msg);
    }

    async loginForm(user, pass) {
        await this.typeUsername(user);
        await this.typePassword(pass);
        await this.clickLogin();
    }


}