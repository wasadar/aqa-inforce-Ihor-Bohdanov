const { test, expect } = require('@playwright/test');
const { generateRandomString } = require('../utils/generaterandomstring.js');

test('Valid Sign Up', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  await page.locator('#signin2').click();
  await page.locator('#sign-username').fill(generateRandomString(10));
  await page.locator('#sign-password').fill(generateRandomString(10));
  await page.locator('#signInModal .modal-footer [class*="btn-primary"]').click();
  page.on('dialog', async dialog => {
    await expect(dialog.message()).toBe('Sign up successful.');
    await dialog.dismiss();
  });
});

test('Invalid Sign Up', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    await page.locator('#signin2').click();
    await page.locator('#sign-username').fill('😰');
    await page.locator('#sign-password').fill(generateRandomString(10));
    await page.locator('#signInModal .modal-footer [class*="btn-primary"]').click();
    page.on('dialog', async dialog => {
      await expect(dialog.message()).toBe('This user already exist.');
      await dialog.dismiss();
    });

    await page.locator('#signInModal .modal-footer [class*="btn-secondary"]').click();
});
