import { test, expect } from '@playwright/test';
import { SaucedemoLoginPage } from '../pages/loginpage.ts';
import { SaucedemoShopPage } from '../pages/shoppage.ts';
import * as fs from 'fs';

const DATA = JSON.parse(fs.readFileSync('tests/fixtures/data/saucedemo-users.json', 'utf-8'));

let loginpage;
let shoppage;

test.beforeEach('Navigate to URL', async ({ page }) => {
    loginpage = new SaucedemoLoginPage(page);
    shoppage = new SaucedemoShopPage(page);
    await loginpage.goto();
});

test('Saucedemo standard Login', async ({ page }) => {

    await loginpage.loginForm(process.env.USERN, process.env.PASS);

    await shoppage.checkTitle();

});


DATA.forEach((user) => {
    test(`Saucedemo ${user.username}`, async ({ page }) => {

        await loginpage.loginForm(user.username, user.password);
        await loginpage.checkErrorMsg(user.statusmsg);

    });
})
