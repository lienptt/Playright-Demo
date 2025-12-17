const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const SignupPage = require('../pages/SignupPage');
const testData = require('../utils/test-data');

/**
 * Test Case 2: Login User with correct email and password
 * Steps:
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Click on 'Signup / Login' button
 * 5. Verify 'Login to your account' is visible
 * 6. Enter correct email address and password
 * 7. Click 'login' button
 * 8. Verify that 'Logged in as username' is visible
 * 9. Click 'Delete Account' button
 * 10. Verify that 'ACCOUNT DELETED!' is visible
 */
test.describe('TC2: Login User with correct credentials', () => {
  test('should login successfully with correct email and password', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    
    // First, create a user to login with
    const userData = testData.users.newUser;
    
    // Register user first
    await homePage.navigate();
    await homePage.clickSignupLogin();
    await loginPage.page.getByRole('link', { name: 'Signup / Login' }).click();
    
    // Create account (simplified - in real scenario, you might use API or fixture)
    await signupPage.enterSignupInfo(userData.name, userData.email);
    await signupPage.verifyAccountInfoVisible();
    await signupPage.fillAccountInformation(userData);
    await signupPage.fillAddressInformation(userData);
    await signupPage.createAccount();
    await signupPage.verifyAccountCreated();
    await signupPage.clickContinue();

    // Logout to test login
    await homePage.clickLogout();
    
    // Step 2-3: Navigate and verify home page
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 4-5: Click Signup/Login and verify login page
    await homePage.clickSignupLogin();
    await loginPage.verifyLoginPageVisible();

    // Step 6-7: Login with correct credentials
    await loginPage.login(userData.email, userData.password);

    // Step 8: Verify logged in
    await homePage.verifyLoggedInAs(userData.name);

    // Step 9-10: Delete account
    await homePage.clickDeleteAccount();
    await signupPage.verifyAccountDeleted();
  });
});

/**
 * Test Case 3: Login User with incorrect email and password
 * Steps:
 * 1. Launch browser
 * 2. Navigate to url 'http://automationexercise.com'
 * 3. Verify that home page is visible successfully
 * 4. Click on 'Signup / Login' button
 * 5. Verify 'Login to your account' is visible
 * 6. Enter incorrect email address and password
 * 7. Click 'login' button
 * 8. Verify error 'Your email or password is incorrect!' is visible
 */
test.describe('TC3: Login User with incorrect credentials', () => {
  test('should show error with incorrect email and password', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const invalidUser = testData.users.invalidUser;

    // Step 2-3: Navigate and verify home page
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 4-5: Click Signup/Login and verify login page
    await homePage.clickSignupLogin();
    await loginPage.verifyLoginPageVisible();

    // Step 6-7: Login with incorrect credentials
    await loginPage.login(invalidUser.email, invalidUser.password);

    // Step 8: Verify error message
    await loginPage.verifyErrorMessage();
  });
});


