import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://google.com');
});

