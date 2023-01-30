import { expect, test } from '@playwright/test'

test('Invite page', async ({ page }) => {
  await page.goto('http://localhost:3000/f5cba7f2-0190-4540-97eb-fbc1214963a6')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Alda & Fran se Casan!/)

  // await page.getByRole('h1', 'Alda & Fran')
  const h1 = await page.locator('h1')
  await expect(h1).toBeVisible()
  /* await expect(page.getByText('Alda & Fran')).toBeVisible(); */
  const h2 = await page.locator('h2').first()
  await expect(h2).toHaveText('Hola Novios!!!')
  // Click the get started link.
  await page.getByText('Confirmar asistencia').first().click()
})
