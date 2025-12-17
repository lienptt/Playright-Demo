const { test } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const SignupPage = require('../pages/SignupPage');
const testData = require('../utils/test-data');

/**
 * Test Case 5: Register User with existing email
 * Steps:
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Click on 'Signup / Login' button
 * 5. Verify 'New User Signup!' is visible
 * 6. Enter name and already registered email address
 * 7. Click 'Signup' button
 * 8. Verify error 'Email Address already exist!' is visible
 */
test.describe('TC5: Register User with existing email', () => {
  test('should show error when registering with existing email', async ({ page }) => {
    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);
    const userData = testData.users.newUser;

    // First, create a user
    await homePage.navigate();
    await homePage.clickSignupLogin();
    await signupPage.verifySignupPageVisible();
    await signupPage.enterSignupInfo(userData.name, userData.email);
    await signupPage.verifyAccountInfoVisible();
    await signupPage.fillAccountInformation(userData);
    await signupPage.fillAddressInformation(userData);
    await signupPage.createAccount();
    await signupPage.verifyAccountCreated();
    await signupPage.clickContinue();
    
    // Logout
    await homePage.clickLogout();

    // Step 2-3: Navigate and verify home page
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 4-5: Click Signup/Login and verify signup page
    await homePage.clickSignupLogin();
    await signupPage.verifySignupPageVisible();

    // Step 6-7: Try to register with same email
    await signupPage.enterSignupInfo('Another User', userData.email);

    // Step 8: Verify error message
    await signupPage.verifyEmailExistsError();
    
    // Cleanup: Delete account
    await homePage.clickSignupLogin();
    const loginPage = require('../pages/LoginPage');
    const login = new loginPage(page);
    await login.login(userData.email, userData.password);
    await homePage.clickDeleteAccount();
    await signupPage.verifyAccountDeleted();
  });
});


