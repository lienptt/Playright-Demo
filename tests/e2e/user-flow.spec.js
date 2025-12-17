const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

/**
 * End-to-end test example
 */
test.describe('User Flow E2E', () => {
  test('complete user journey', async ({ page }) => {
    const homePage = new HomePage(page);
    
    // Navigate to home
    await homePage.goto('https://playwright.dev/');
    
    // Verify title
    await expect(page).toHaveTitle(/Playwright/);
    
    // Click get started
    await homePage.clickGetStarted();
    
    // Verify navigation
    await expect(page).toHaveURL(/.*intro/);
  });
});


