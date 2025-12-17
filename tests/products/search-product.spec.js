const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');
const testData = require('../utils/test-data');

/**
 * Test Case 9: Search Product
 * Steps:
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Click on 'Products' button
 * 5. Verify user is navigated to ALL PRODUCTS page successfully
 * 6. Enter product name in search input and click search button
 * 7. Verify 'SEARCHED PRODUCTS' is visible
 * 8. Verify all the products related to search are visible
 */
test.describe('TC9: Search Product', () => {
  test('should search for products successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const searchTerm = 'Top';

    // Step 2-3: Navigate and verify home page
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 4-5: Click Products and verify products page
    await homePage.clickProducts();
    await productPage.verifyProductsPageVisible();

    // Step 6: Search for product
    await productPage.searchProduct(searchTerm);

    // Step 7-8: Verify searched products
    const productCount = await productPage.getProductCount();
    expect(productCount).toBeGreaterThan(0);
    
    // Verify search title is visible
    const searchTitle = page.locator('h2.title:has-text("SEARCHED PRODUCTS")');
    await expect(searchTitle).toBeVisible();
  });
});


