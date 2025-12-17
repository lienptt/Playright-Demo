const BasePage = require('./BasePage');

/**
 * Product Page Object Model
 */
class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Product list locators
    this.productsTitle = page.locator('h2.title:has-text("All Products")');
    this.productList = page.locator('.features_items .productinfo');
    this.productName = page.locator('.productinfo h2');
    this.addToCartButton = page.locator('a.add-to-cart');
    this.viewProductLink = page.locator('a:has-text("View Product")');
    
    // Product detail page
    this.productDetailName = page.locator('.product-information h2');
    this.productDetailPrice = page.locator('.product-information span span');
    this.quantityInput = page.locator('#quantity');
    this.addToCartDetailButton = page.locator('button:has-text("Add to cart")');
    
    // Search
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProducts = page.locator('.features_items .productinfo');
    
    // Categories
    this.categoryWomen = page.locator('a[href="#Women"]');
    this.categoryMen = page.locator('a[href="#Men"]');
    this.categoryKids = page.locator('a[href="#Kids"]');
    
    // Brands
    this.brandPolo = page.locator('a[href="/brand_products/Polo"]');
    this.brandHMB = page.locator('a[href="/brand_products/H&M"]');
    
    // Review
    this.reviewName = page.locator('#name');
    this.reviewEmail = page.locator('#email');
    this.reviewMessage = page.locator('#review');
    this.reviewSubmitButton = page.locator('#button-review');
    this.reviewSuccess = page.locator('span:has-text("Thank you for your review.")');
    
    // Modal
    this.modal = page.locator('.modal');
    this.modalContent = page.locator('div.modal-content');
    this.modalBackdrop = page.locator('.modal-backdrop');
    this.continueShoppingButton = page.locator('button[data-dismiss="modal"]:has-text("Continue Shopping")');
    this.viewCartButton = page.locator('a:has-text("View Cart")');
  }

  async navigate() {
    await this.goto('/products');
  }

  async verifyProductsPageVisible() {
    await this.productsTitle.waitFor({ state: 'visible' });
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async getProductCount() {
    return await this.productList.count();
  }

  async clickViewProduct(index = 0) {
    await this.viewProductLink.nth(index).click();
  }

  async addProductToCart(index = 0) {
    // Hover over the product card first to make the add-to-cart button clickable
    const productCard = this.productList.nth(index);
    const addToCartBtn = this.addToCartButton.nth(index);
    
    // Scroll the product card into view
    await productCard.scrollIntoViewIfNeeded();
    
    // Hover over the product card to reveal/activate the add-to-cart button
    await productCard.hover();
    
    // Wait for the add-to-cart button to be visible and scroll it into view
    await addToCartBtn.waitFor({ state: 'visible' });
    await addToCartBtn.scrollIntoViewIfNeeded();
    
    // Click the button - use force if element is intercepted by overlay elements
    await addToCartBtn.click({ force: true });
  }

  async addProductToCartFromDetail(quantity = 1) {
    await this.quantityInput.fill(quantity.toString());
    await this.addToCartDetailButton.click();
  }

  async selectCategory(categoryName) {
    switch(categoryName.toLowerCase()) {
      case 'women':
        await this.categoryWomen.click();
        break;
      case 'men':
        await this.categoryMen.click();
        break;
      case 'kids':
        await this.categoryKids.click();
        break;
    }
  }

  async selectBrand(brandName) {
    switch(brandName.toLowerCase()) {
      case 'polo':
        await this.brandPolo.click();
        break;
      case 'h&m':
        await this.brandHMB.click();
        break;
    }
  }

  async submitReview(name, email, message) {
    await this.reviewName.fill(name);
    await this.reviewEmail.fill(email);
    await this.reviewMessage.fill(message);
    await this.reviewSubmitButton.click();
  }

  async verifyReviewSubmitted() {
    await this.reviewSuccess.waitFor({ state: 'visible' });
  }

  async waitForAddToCartModal() {
    // Wait for modal content to be attached to DOM
    await this.modalContent.waitFor({ state: 'attached', timeout: 10000 });
    
    // Wait for buttons to be attached to DOM (they may be hidden but we can click via JS)
    await this.continueShoppingButton.waitFor({ state: 'attached', timeout: 5000 });
    await this.viewCartButton.waitFor({ state: 'attached', timeout: 5000 });
  }

  async clickContinueShopping() {
    await this.waitForAddToCartModal();
    // Use JavaScript click since button may be hidden but functional
    await this.continueShoppingButton.evaluate((button) => button.click());
  }

  async clickViewCart() {
    await this.waitForAddToCartModal();
    // Use JavaScript click since button may be hidden but functional
    await this.viewCartButton.evaluate((link) => link.click());
  }
}

module.exports = ProductPage;


