const BasePage = require('./BasePage');

/**
 * Cart Page Object Model
 */
class CartPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Cart locators
    this.cartTitle = page.locator('li.active:has-text("Shopping Cart")');
    this.cartTable = page.locator('#cart_info_table');
    this.cartItems = page.locator('#cart_info_table tbody tr');
    this.proceedToCheckoutButton = page.locator('a.check_out');
    this.registerLoginButton = page.locator('a:has-text("Register / Login")');
    
    // Product in cart
    this.productName = page.locator('.cart_description h4 a');
    this.productPrice = page.locator('.cart_price p');
    this.productQuantity = page.locator('.cart_quantity button');
    this.removeButton = page.locator('.cart_delete a');
    
    // Subscription
    this.subscriptionTitle = page.locator('h2:has-text("Subscription")');
    this.subscriptionEmail = page.locator('#susbscribe_email');
    this.subscribeButton = page.locator('#subscribe');
  }

  async navigate() {
    await this.goto('/view_cart');
  }

  async verifyCartPageVisible() {
    await this.cartTitle.waitFor({ state: 'visible' });
  }

  async getCartItemsCount() {
    const count = await this.cartItems.count();
    return count;
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }

  async clickRegisterLogin() {
    await this.registerLoginButton.click();
  }

  async removeProduct(index = 0) {
    await this.removeButton.nth(index).click();
  }

  async verifyProductInCart(productName) {
    const productText = await this.productName.first().textContent();
    return productText.includes(productName);
  }

  async subscribe(email) {
    await this.subscriptionEmail.fill(email);
    await this.subscribeButton.click();
  }
}

module.exports = CartPage;


