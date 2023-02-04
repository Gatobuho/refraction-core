// @ts-check
import { expect, test } from '@playwright/test'

test('has title', async ({ page, baseURL }) => {
  await page.goto(baseURL)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Refraction/)
})
/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/')

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click()

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/)
}) */
