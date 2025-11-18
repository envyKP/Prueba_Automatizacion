import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.xtrim.com.ec/');
  await page.getByText('×').click();
  await page.getByRole('link', { name: 'k Te llamamos' }).click();
  await page.goto('https://www.xtrim.com.ec/contactanos/');
  await page.getByRole('textbox', { name: 'Nombres' }).click();
  await page.getByRole('textbox', { name: 'Nombres' }).fill('kevin johan Perez macias');
  await page.getByRole('textbox', { name: 'Cédula' }).click();
  await page.getByRole('textbox', { name: 'Cédula' }).fill('0803894013');
  await page.getByRole('textbox', { name: 'Teléfono' }).click();
  await page.getByRole('textbox', { name: 'Teléfono' }).fill('0995623488');
  await page.getByRole('textbox', { name: 'Correo electrónico' }).click();
  await page.getByRole('textbox', { name: 'Correo electrónico' }).fill('kperezm2@est.com');
  await page.getByRole('button', { name: 'Enviar' }).click();
});
