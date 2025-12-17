const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const SignupPage = require('../pages/SignupPage');
const testData = require('../utils/test-data');

test.describe('TC1: Register User', () => {
  test('should register a new user successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);
    const userData = testData.users.newUser;

    // Step 2-3: Navigate and verify home page
    await homePage.navigate();
    await homePage.verifyHomePageVisible();

    // Step 4-5: Click Signup/Login and verify signup page
    await homePage.clickSignupLogin();
    await signupPage.verifySignupPageVisible();

    // Step 6-7: Enter signup info
    await signupPage.enterSignupInfo(userData.name, userData.email);

    // Step 8: Verify account information form
    await signupPage.verifyAccountInfoVisible();

    // Step 9-11: Fill account information
    await signupPage.fillAccountInformation(userData);

    // Step 12: Fill address information
    await signupPage.fillAddressInformation(userData);

    // Step 13: Create account
    await signupPage.createAccount();

    // Step 14: Verify account created
    await signupPage.verifyAccountCreated();

    // Step 15: Click continue
    await signupPage.clickContinue();

    // Step 16: Verify logged in
    await homePage.verifyLoggedInAs(userData.name);

    // Step 17-18: Delete account
    await homePage.clickDeleteAccount();
    await signupPage.verifyAccountDeleted();
    await signupPage.clickContinue();
  });
});


