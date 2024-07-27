const { test, expect } = require('@playwright/test');
const categories = ["phone", "notebook", "monitor"]

test('Card link', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  let link = await page.locator('.hrefch').first();
  let name = await link.textContent();
  await link.click();

  await expect(await page.locator('h2.name')).toHaveText(name);
});

test('Categories filter', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    let index = 0;

    await page.route('**/bycat', async (route, request) => {
        const postData = JSON.parse(request.postData());

        await expect(postData.cat).toBe(categories[index++]);
    
        await route.continue();
    });
  
    await page.getByText('Phones', { exact: true }).click();
    await page.getByText('Laptops', { exact: true }).click();
    await page.getByText('Monitors', { exact: true }).click();

    let byCatRequestSent = false;
    page.on('route', (route, request) => {
        if (request.url().includes('/bycat')) {
            byCatRequestSent = true;
            route.abort();
        } else {
            route.continue();
        }
    });

    await page.getByText('CATEGORIES', { exact: true }).click();
    await expect(byCatRequestSent).toBe(false);
});
