const { test, expect } = require('@playwright/test');

test('the button displays a greeting', async ({ page }) => {
    await page.goto('/');

    await expect(
        page.getByRole('heading', { name: 'Jenkins Practice' })
    ).toBeVisible();

    await page.getByRole('button', { name: 'Say hello' }).click();

    await expect(page.locator('#message')).toHaveText('Hello, tester!');
});