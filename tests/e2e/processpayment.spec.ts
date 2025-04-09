import { test, expect } from '@playwright/test';
import { SaucedemoLoginPage } from '../pages/loginpage.ts';
import { SaucedemoShopPage } from '../pages/shoppage.ts';
import { SaucedemoCartPage } from '../pages/cartpage.ts';

let loginpage;
let shoppage;
let cartpage;

test.beforeEach('Navigate to URL', async ({ page }) => {
    loginpage = new SaucedemoLoginPage(page);
    shoppage = new SaucedemoShopPage(page);
    cartpage = new SaucedemoCartPage(page);
    await loginpage.goto();
});

test('Saucedemo complete order', async ({ page }) => {
    
    await loginpage.loginForm(process.env.USERN, process.env.PASS);
    
    await shoppage.checkTitle();
    await shoppage.clickAddToCart();

    await cartpage.openCart();
    await cartpage.clickContinueShopping();

});