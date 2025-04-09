import { test, expect } from '@playwright/test';

test.skip('Simple navigation to google', async ({ page }) => {
  await page.goto('https://google.com');
});

