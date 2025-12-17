/**
 * Custom Fixtures - Tùy chỉnh fixtures cho tests
 */
const { test as base } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

// Extend base test with custom fixtures
const test = base.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto('https://playwright.dev/');
    await use(homePage);
  },
  
  authenticatedPage: async ({ page }, use) => {
    // Thực hiện login trước khi test
    await page.goto('https://example.com/login');
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'testpass');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/dashboard');
    await use(page);
  }
});

module.exports = test;


