const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const SignupPage = require('../pages/SignupPage');
const testData = require('../utils/test-data');

/**
 * Test Case 4: Logout User
 * Steps:
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Click on 'Signup / Login' button
 * 5. Verify 'Login to your account' is visible
 * 6. Enter correct email address and password
 * 7. Click 'login' button
 * 8. Verify that 'Logged in as username' is visible
 * 9. Click 'Logout' button
 * 10. Verify that user is navigated to login page
 */
test.describe('TC4: Logout User', () => {
  test('should logout successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const userData = testData.users.newUser;

    // First create and login user
    await homePage.navigate();
    await homePage.clickSignupLogin();
    
    // Register user (simplified - in real scenario use fixture)
    const signupPage = new SignupPage(page);
    await signupPage.enterSignupInfo(userData.name, userData.email);
    await signupPage.verifyAccountInfoVisible();
    await signupPage.fillAccountInformation(userData);
    await signupPage.fillAddressInformation(userData);
    await signupPage.createAccount();
    await signupPage.verifyAccountCreated();
    await signupPage.clickContinue();
    
    // Step 2-3: Navigate and verify home page
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 3: Click logout
    await homePage.clickLogout();

    // Step 4: Verify navigated to login page
    await loginPage.verifyLoginPageVisible();
    
    // Cleanup: Delete account
    await homePage.clickSignupLogin();
    await loginPage.login(userData.email, userData.password);
    await homePage.clickDeleteAccount();
    await signupPage.verifyAccountDeleted();
  });
});


