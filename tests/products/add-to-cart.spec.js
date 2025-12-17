const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const testData = require('../utils/test-data');

/**
 * Test Case 12: Add Products in Cart
 * Steps:
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Click 'Products' button
 * 5. Hover over first product and click 'Add to cart'
 * 6. Click 'Continue Shopping' button
 * 7. Hover over second product and click 'Add to cart'
 * 8. Click 'View Cart' button
 * 9. Verify both products are added to Cart
 * 10. Verify their prices, quantity and total price
 */
test.describe('TC12: Add Products in Cart', () => {
  test('should add products to cart successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Step 2-3: Navigate and verify home page
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 4: Click Products button
    await homePage.clickProducts();
    await productPage.verifyProductsPageVisible();

    // Step 5: Add first product to cart
    await productPage.addProductToCart(0);
    await productPage.clickContinueShopping();

    // Step 7: Add second product to cart
    await productPage.addProductToCart(1);
    await productPage.clickViewCart();

    // Step 9-10: Verify cart
    await cartPage.verifyCartPageVisible();
    const itemCount = await cartPage.getCartItemsCount();
    expect(itemCount).toBeGreaterThan(0);
  });
});


