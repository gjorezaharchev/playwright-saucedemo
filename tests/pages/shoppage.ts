import { expect, type Locator, type Page } from '@playwright/test';

export class SaucedemoShopPage {
    readonly page: Page;
    readonly title: Locator;
    readonly addtocart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByText('Swag Labs');
        this.addtocart = page.locator('xpath=//button[contains(@data-test, "add-to-cart")]');
    }

    async checkTitle() {
        await expect(this.title).toContainText('Swag Labs');
    }

    async clickAddToCart() {
        await this.addtocart.first().click();
        await expect(this.title).toContainText('Swag Labs');
    }

}