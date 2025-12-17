const BasePage = require('./BasePage');

/**
 * Home Page Object Model cho AutomationExercise.com
 */
class HomePage extends BasePage {
  constructor(page) {
    super(page);
    
    // Locators
    this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
    this.deleteAccountLink = page.getByRole('link', { name: 'Delete Account' });
    this.productsLink = page.getByRole('link', { name: 'Products' });
    this.cartLink = page.getByRole('link', { name: 'Cart' });
    this.contactUsLink = page.getByRole('link', { name: 'Contact us' });
    this.testCasesLink = page.getByRole('link', { name: 'Test Cases' });
    
    // Home page elements
    this.homePageSlider = page.locator('#slider');
    this.loggedInAs = page.locator('a:has-text("Logged in as")');
    
    // Products
    this.addToCartButtons = page.locator('a.add-to-cart');
    this.viewProductLinks = page.locator('a:has-text("View Product")');
    
    // Subscription
    this.subscriptionTitle = page.locator('h2:has-text("Subscription")');
    this.subscriptionEmail = page.locator('#susbscribe_email');
    this.subscribeButton = page.locator('#subscribe');
    this.subscriptionSuccess = page.locator('div.alert-success:has-text("You have been successfully subscribed!")');
    
    // Scroll
    this.scrollUpArrow = page.locator('#scrollUp');
  }

  async navigate() {
    await this.goto('/');
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }

  async clickLogout() {
    await this.logoutLink.click();
  }

  async clickDeleteAccount() {
    await this.deleteAccountLink.click();
  }

  async clickProducts() {
    await this.productsLink.click();
  }

  async clickCart() {
    await this.cartLink.click();
  }

  async clickContactUs() {
    await this.contactUsLink.click();
  }

  async verifyHomePageVisible() {
    await this.page.waitForLoadState('networkidle');
    await this.homePageSlider.waitFor({ state: 'visible' });
  }

  async verifyLoggedInAs(username) {
    await this.loggedInAs.waitFor({ state: 'visible' });
    const text = await this.loggedInAs.textContent();
    return text.includes(username);
  }

  async addProductToCart(productName) {
    // Find product by name and click Add to Cart
    const productCard = this.page.locator(`.productinfo:has-text("${productName}")`);
    await productCard.locator('a.add-to-cart').first().click();
  }

  async subscribe(email) {
    await this.subscriptionEmail.fill(email);
    await this.subscribeButton.click();
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async clickScrollUpArrow() {
    await this.scrollUpArrow.click();
  }
}

module.exports = HomePage;
