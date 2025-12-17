const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const SignupPage = require('../pages/SignupPage');
const testData = require('../utils/test-data');

/**
 * Test Case 14: Place Order: Register while Checkout
 * Steps:
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Add products to cart
 * 5. Click 'Cart' button
 * 6. Verify that cart page is displayed
 * 7. Click Proceed To Checkout
 * 8. Click 'Register / Login' button
 * 9. Fill all details in Signup and create account
 * 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
 * 11. Verify ' Logged in as username' at top
 * 12. Click 'Cart' button
 * 13. Click 'Proceed To Checkout' button
 * 14. Verify Address Details and Review Your Order
 * 15. Enter description in comment text area and click 'Place Order'
 * 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
 * 17. Click 'Pay and Confirm Order' button
 * 18. Verify success message 'Your order has been placed successfully!'
 * 19. Click 'Delete Account' button
 * 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
 */
test.describe('TC14: Place Order - Register while Checkout', () => {
  test('should place order after registering during checkout', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const signupPage = new SignupPage(page);
    const userData = testData.users.newUser;

    // Step 2-3: Navigate and verify home page
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 4: Add products to cart
    await homePage.clickProducts();
    await productPage.verifyProductsPageVisible();
    await productPage.addProductToCart(0);
    await page.waitForSelector('div.modal-content', { state: 'visible' });
    await page.click('button:has-text("Continue Shopping")');

    // Step 5-6: Go to cart
    await homePage.clickCart();
    await cartPage.verifyCartPageVisible();

    // Step 7-8: Proceed to checkout and register
    await cartPage.proceedToCheckout();
    await cartPage.clickRegisterLogin();

    // Step 9-10: Register user
    await signupPage.verifySignupPageVisible();
    await signupPage.enterSignupInfo(userData.name, userData.email);
    await signupPage.verifyAccountInfoVisible();
    await signupPage.fillAccountInformation(userData);
    await signupPage.fillAddressInformation(userData);
    await signupPage.createAccount();
    await signupPage.verifyAccountCreated();
    await signupPage.clickContinue();

    // Step 11: Verify logged in
    await homePage.verifyLoggedInAs(userData.name);

    // Step 12-13: Go to cart and checkout
    await homePage.clickCart();
    await cartPage.proceedToCheckout();

    // Step 14: Verify address details
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.verifyAddressDetails(userData);

    // Step 15: Enter comment and place order
    await checkoutPage.enterComment('Test order comment');
    await checkoutPage.placeOrder();

    // Step 16-17: Fill payment and confirm
    await checkoutPage.fillPaymentDetails(testData.payment);
    await checkoutPage.confirmPayment();

    // Step 18: Verify order success
    await checkoutPage.verifyOrderSuccess();

    // Step 19-20: Delete account
    await homePage.navigate();
    await homePage.clickDeleteAccount();
    await signupPage.verifyAccountDeleted();
    await signupPage.clickContinue();
  });
});


