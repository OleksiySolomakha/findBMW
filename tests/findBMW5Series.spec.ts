import { test, expect } from '@playwright/test';

test('Easy search by needful parameters', async ({ page }) => {
  await page.goto('https://auto.ria.com/uk/');  
  await page.getByText('Розумію і дозволяю').click();
  await page.locator('#brandTooltipBrandAutocomplete-brand label').click();
  await page.keyboard.insertText('BMW');
  await page.locator('[data-value="9"]').nth(1).click();
  await page.locator('#brandTooltipBrandAutocomplete-model label').click();
  await page.getByText('5 Series', { exact: true }).click();
  await page.locator('label').filter({ hasText: 'Рік випуску' }).click();
  await page.locator('#yearFrom').selectOption('2003');
  await page.locator('#yearTo').selectOption('2005');
  await page.locator('.fold').first().click();
  await page.locator('#brandTooltipBrandAutocomplete-region label').click();
  await page.getByText('Київська обл.').click();
  await page.getByRole('button', { name: 'Пошук' }).click();
  await page.getByText('45 авто', { exact: true }).click();
  await page.locator('#searchResults section').filter({ hasText: 'Sun Oct 01 2023 18:18:07 GMT+0300 (Eastern European Summer Time) Перевірений VIN' }).getByTitle('BMW 5 Series 2003 в Києві', { exact: true }).click();
  await page.close();
});
