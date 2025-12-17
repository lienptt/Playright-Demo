const BasePage = require('./BasePage');

/**
 * Login Page Object Model
 */
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Locators
    this.loginForm = page.locator('.login-form');
    this.loginEmail = page.locator('input[data-qa="login-email"]');
    this.loginPassword = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loginTitle = page.locator('h2:has-text("Login to your account")');
    
    // Error message
    this.errorMessage = page.locator('p:has-text("Your email or password is incorrect!")');
  }

  async navigate() {
    await this.goto('/login');
  }

  async verifyLoginPageVisible() {
    await this.loginTitle.waitFor({ state: 'visible' });
  }

  async login(email, password) {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }

  async verifyErrorMessage() {
    await this.errorMessage.waitFor({ state: 'visible' });
  }
}

module.exports = LoginPage;


