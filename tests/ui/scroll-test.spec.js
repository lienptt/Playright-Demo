const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

/**
 * Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
 * Steps:
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Scroll down page to bottom
 * 5. Verify 'SUBSCRIPTION' is visible
 * 6. Click on arrow at bottom right side to move upward
 * 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
 */
test.describe('TC25: Scroll Up using Arrow button', () => {
  test('should scroll up using arrow button', async ({ page }) => {
    const homePage = new HomePage(page);

    // Step 2-3: Navigate and verify home page
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 4: Scroll down
    await homePage.scrollToBottom();

    // Step 5: Verify subscription is visible
    await expect(homePage.subscriptionTitle).toBeVisible();

    // Step 6: Click scroll up arrow
    await homePage.clickScrollUpArrow();

    // Step 7: Verify page scrolled up and title is visible
    await expect(homePage.homePageSlider).toBeVisible();
  });
});

/**
 * Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality
 * Steps:
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Scroll down page to bottom
 * 5. Verify 'SUBSCRIPTION' is visible
 * 6. Scroll up page to top
 * 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
 */
test.describe('TC26: Scroll Up without Arrow button', () => {
  test('should scroll up without arrow button', async ({ page }) => {
    const homePage = new HomePage(page);

    // Step 2-3: Navigate and verify home page
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 4: Scroll down
    await homePage.scrollToBottom();

    // Step 5: Verify subscription is visible
    await expect(homePage.subscriptionTitle).toBeVisible();

    // Step 6: Scroll up
    await homePage.scrollToTop();

    // Step 7: Verify page scrolled up and title is visible
    await expect(homePage.homePageSlider).toBeVisible();
  });
});


