import { test, expect } from '@playwright/test';
import { SaucedemoLoginPage } from '../pages/loginpage.ts';
import { SaucedemoShopPage } from '../pages/shoppage.ts';

let loginpage;
let shoppage;

test.beforeEach('Navigate to URL', async ({ page }) => {
    loginpage = new SaucedemoLoginPage(page);
    shoppage = new SaucedemoShopPage(page);
    await loginpage.goto();
});

test('Saucedemo Add to Cart', async ({ page }) => {
    
    await loginpage.loginForm(process.env.USERN, process.env.PASS);
    
    await shoppage.checkTitle();
    await shoppage.clickAddToCart();

});