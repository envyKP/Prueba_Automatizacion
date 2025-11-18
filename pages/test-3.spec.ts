import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.xtrim.com.ec/');
  await page.getByText('×').click();
  await page.getByRole('link', { name: 'Zapping' }).click();
  await page.getByRole('link', { name: 'Contratalo Aquí' }).first().click();
  await page.goto('https://zappingsva.xtrim.com.ec/');
  await page.getByRole('button', { name: 'dropdown trigger' }).click();
  await page.getByRole('option', { name: 'Cédula' }).click();
  await page.getByRole('textbox', { name: 'Ingresa tu número de cedula' }).click();
  await page.getByRole('textbox', { name: 'Ingresa tu número de cedula' }).fill('0803894013');
  await page.getByRole('textbox', { name: 'Ingrese su correo electrónico' }).click();
  await page.getByRole('textbox', { name: 'Ingrese su correo electrónico' }).fill('kperezm2@outlook.com');
  await page.locator('.p-checkbox-box').click();
  await page.locator('iframe[name="a-jjnltl6bflmo"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});