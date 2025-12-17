const BasePage = require('./BasePage');

/**
 * Signup Page Object Model
 */
class SignupPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Signup form locators
    this.signupForm = page.locator('.signup-form');
    this.signupName = page.locator('input[data-qa="signup-name"]');
    this.signupEmail = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.signupTitle = page.locator('h2:has-text("New User Signup!")');
    
    // Account information form
    this.accountInfoTitle = page.locator('h2:has-text("ENTER ACCOUNT INFORMATION")');
    this.titleMr = page.locator('#id_gender1');
    this.titleMrs = page.locator('#id_gender2');
    this.password = page.locator('#password');
    this.day = page.locator('#days');
    this.month = page.locator('#months');
    this.year = page.locator('#years');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.offersCheckbox = page.locator('#optin');
    
    // Address information
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.company = page.locator('#company');
    this.address1 = page.locator('#address1');
    this.address2 = page.locator('#address2');
    this.country = page.locator('#country');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobileNumber = page.locator('#mobile_number');
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    
    // Success messages
    this.accountCreatedTitle = page.locator('h2:has-text("ACCOUNT CREATED!")');
    this.accountDeletedTitle = page.locator('h2:has-text("ACCOUNT DELETED!")');
    this.continueButton = page.locator('a[data-qa="continue-button"]');
    
    // Error message
    this.emailExistsError = page.locator('p:has-text("Email Address already exist!")');
  }

  async navigate() {
    await this.goto('/signup');
  }

  async verifySignupPageVisible() {
    await this.signupTitle.waitFor({ state: 'visible' });
  }

  async enterSignupInfo(name, email) {
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
  }

  async verifyAccountInfoVisible() {
    await this.accountInfoTitle.waitFor({ state: 'visible' });
  }

  async fillAccountInformation(userData) {
    // Select title
    if (userData.title === 'Mr') {
      await this.titleMr.click();
    } else {
      await this.titleMrs.click();
    }
    
    await this.password.fill(userData.password);
    await this.day.selectOption(userData.day);
    await this.month.selectOption(userData.month);
    await this.year.selectOption(userData.year);
    
    // Checkboxes
    await this.newsletterCheckbox.check();
    await this.offersCheckbox.check();
  }

  async fillAddressInformation(userData) {
    await this.firstName.fill(userData.firstName);
    await this.lastName.fill(userData.lastName);
    await this.company.fill(userData.company);
    await this.address1.fill(userData.address1);
    await this.address2.fill(userData.address2);
    await this.country.selectOption(userData.country);
    await this.state.fill(userData.state);
    await this.city.fill(userData.city);
    await this.zipcode.fill(userData.zipcode);
    await this.mobileNumber.fill(userData.mobileNumber);
  }

  async createAccount() {
    await this.createAccountButton.click();
  }

  async verifyAccountCreated() {
    await this.accountCreatedTitle.waitFor({ state: 'visible', timeout: 3000 });
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async verifyAccountDeleted() {
    await this.accountDeletedTitle.waitFor({ state: 'visible' });
  }

  async verifyEmailExistsError() {
    await this.emailExistsError.waitFor({ state: 'visible' });
  }
}

module.exports = SignupPage;


