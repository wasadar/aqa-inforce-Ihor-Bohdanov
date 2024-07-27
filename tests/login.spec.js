const { test, expect } = require('@playwright/test');
const { generateRandomString } = require('../utils/generaterandomstring.js');

test('Valid Login', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('😰');
  await page.locator('#loginpassword').fill('somepassword');
  await page.locator('#logInModal .modal-footer [class*="btn-primary"]').click();
  await expect(await page.locator('#logout2')).toBeVisible();
  await expect(await page.locator('#nameofuser')).toBeVisible();

  await page.locator('#logout2').click();
});

test('Invalid password Login', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('😰');
    await page.locator('#loginpassword').fill(generateRandomString(10));
    await page.locator('#logInModal .modal-footer [class*="btn-primary"]').click();
    page.on('dialog', async dialog => {
      await expect(dialog.message()).toBe('Wrong password.');
      await dialog.dismiss();
    });

    await page.locator('#logInModal .modal-footer [class*="btn-secondary"]').click();
});

test('Invalid username Login', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill(generateRandomString(10));
    await page.locator('#loginpassword').fill(generateRandomString(10));
    await page.locator('#logInModal .modal-footer [class*="btn-primary"]').click();
    page.on('dialog', async dialog => {
      await expect(dialog.message()).toBe('User does not exist.');
      await dialog.dismiss();
    });

    await page.locator('#logInModal .modal-footer [class*="btn-secondary"]').click();
});
