import { expect, type Locator, type Page } from '@playwright/test';

export class SaucedemoCartPage {
    readonly page: Page;
    readonly cart: Locator;
    readonly continue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cart = page.locator('[data-test="shopping-cart-link"]')
        this.continue = page.locator('[data-test="checkout"]');
    }

    async openCart() {
        await this.cart.click();
    }

    async clickContinueShopping() {
        await this.continue.click();
    }


}