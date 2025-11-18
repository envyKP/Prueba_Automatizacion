import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.xtrim.com.ec/');
  await page.getByText('×').click();
  await page.getByRole('link', { name: ' Pagar Servicio' }).click();
  await page.goto('https://pagos.xtrim.com.ec/');
  await page.locator('x-present-modal').getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('textbox', { name: 'Ingrese su número de Cédula' }).click();
  await page.getByRole('textbox', { name: 'Ingrese su número de Cédula' }).fill('0803894013');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('img', { name: 'cerrar' }).click();
  await page.getByText('Ir a la página de Xtrim').click();
});