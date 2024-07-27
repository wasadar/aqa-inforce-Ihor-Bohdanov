const { test, expect } = require('@playwright/test');
const { generateRandomString } = require('../utils/generaterandomstring.js');

test('Add to cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  let link = await page.locator('.hrefch').first();
  let name = await link.textContent();
  await link.click();
  await page.locator('[onclick="addToCart(1)"]').click();
  page.on('dialog', async dialog => {
    await expect(dialog.message()).toBe('Product added');
    await dialog.dismiss();
  });
  await page.getByText('Cart', { exact: true }).click();
  await page.waitForTimeout(2000);
  await expect(await page.locator('td').nth(1)).toHaveText(name);
});

test('Remove from the cart', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
  
    let link = await page.locator('.hrefch').first();
    await link.click();
    await page.locator('[onclick="addToCart(1)"]').click();
    page.on('dialog', async dialog => {
        await expect(dialog.message()).toBe('Product added');
        await dialog.dismiss();
    });
    await page.getByText('Cart', { exact: true }).click();
    await page.getByText('Delete').click();
    await page.waitForTimeout(2000);
    await expect(await page.locator('td').count()).toBe(0);
});

test('Place order', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
  
    let link = await page.locator('.hrefch').first();
    await link.click();
    await page.locator('[onclick="addToCart(1)"]').click();
    page.on('dialog', async dialog => {
        await expect(dialog.message()).toBe('Product added');
        await dialog.dismiss();
    });
    await page.getByText('Cart', { exact: true }).click();
    await page.getByText('Place Order', { exact: true }).click();
    await page.locator('#name').fill(generateRandomString(10));
    await page.locator('#country').fill(generateRandomString(10));
    await page.locator('#city').fill(generateRandomString(10));
    await page.locator('#card').fill(generateRandomString(10));
    await page.locator('#month').fill(generateRandomString(10));
    await page.locator('#year').fill(generateRandomString(10));
    await page.locator('#orderModal .modal-footer [class*="btn-primary"]').click();
    expect(await page.getByText('Thank you for your purchase!', { exact: true })).toBeVisible();
    await page.getByText('OK').click();
});