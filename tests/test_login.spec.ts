import { test, expect } from '@playwright/test';

test.describe('Principal', () => {
  test.beforeEach(async ({ page }) => {
  await page.goto('https://www.xtrim.com.ec/');
  const modal = page.locator('#myModal.modal');
  await expect(modal).toBeVisible();
  const cerrarModal = page.locator('span.close');
  await expect(cerrarModal).toBeVisible();
  await cerrarModal.click();
  await expect(modal).not.toBeVisible();
});

test('Te llamamos', async ({ page }) => {
  await page.waitForTimeout(3000);
  const teLlamamosLink = page.locator('a[title="Te llamamos"]');
  await expect(teLlamamosLink).toBeVisible();
  await teLlamamosLink.click();
  await expect(page).toHaveURL(/\/contactanos\/$/);

  const nombreInput = page.locator('#wpforms-11208-field_1');
  await expect(nombreInput).toBeVisible();
  await nombreInput.fill('Juan Pérez');

  const cedulaInput = page.locator('#wpforms-11208-field_5');
  await cedulaInput.fill('0903894012');

  const telefonoInput = page.locator('#wpforms-11208-field_2');
  await telefonoInput.fill('0991234567');

  const correoInput = page.locator('#wpforms-11208-field_3');
  await correoInput.fill('juan@mail.com');

  const autorizoCheckbox = page.locator('#wpforms-11208-field_4_1');
  await autorizoCheckbox.check();

});

 
test('Pagar Servicio', async ({ page }) => {
    const pagarServicio = page.locator('a.mega-menu-link[href="https://pagos.xtrim.com.ec/"]');
    await expect(pagarServicio).toBeVisible();
    await pagarServicio.click();
    await expect(page).toHaveURL(/pagos\.xtrim\.com\.ec/);
    const continuarBtn = page.locator('button.primaryBtn:has-text("Continuar"):not([disabled])');
    await continuarBtn.click();
    const cedulaInput = page.locator('input[placeholder="Ingrese su número de Cédula"]');
    await expect(cedulaInput).toBeVisible();
    const continuarBtn2 = page.locator('x-button button.primaryBtn:has-text("Continuar")');
    await expect(continuarBtn2).toBeDisabled();
    await cedulaInput.fill('0803894013');
    await expect(continuarBtn2).toBeEnabled();
    await continuarBtn2.click();
    const cerrarPopup = page.locator('img[alt="cerrar"]');
});


test('Zapping', async ({ page }) => {
  //await page.goto('https://www.xtrim.com.ec/');
  //await page.getByText('×').click();
  await page.getByRole('link', { name: 'Zapping' }).click();
  await page.getByRole('link', { name: 'Contratalo Aquí' }).first().click();
  await page.locator('#pn_id_5 .p-dropdown-label').click();
  await page.getByRole('option', { name: 'Cédula' }).click();
  await page.getByRole('textbox', { name: 'Ingresa tu número de cedula' }).click();
  await page.getByRole('textbox', { name: 'Ingresa tu número de cedula' }).fill('0803894013');
  await page.getByRole('textbox', { name: 'Ingrese su correo electrónico' }).click();
  await page.getByRole('textbox', { name: 'Ingrese su correo electrónico' }).fill('kperezm2@outlook.com');
  await page.locator('.p-checkbox-box').click();
  //await page.locator('iframe[name="a-jjnltl6bflmo"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});



});
 
 
