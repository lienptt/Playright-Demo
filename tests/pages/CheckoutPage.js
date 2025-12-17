const BasePage = require('./BasePage');

/**
 * Checkout Page Object Model
 */
class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Checkout locators
    this.checkoutTitle = page.locator('h2:has-text("Address Details")');
    this.deliveryAddress = page.locator('#address_delivery');
    this.billingAddress = page.locator('#address_invoice');
    this.orderReview = page.locator('h2:has-text("Review Your Order")');
    
    // Comment
    this.commentTextarea = page.locator('textarea[name="message"]');
    this.placeOrderButton = page.locator('a.check_out');
    
    // Payment
    this.paymentTitle = page.locator('h2:has-text("Payment")');
    this.nameOnCard = page.locator('input[name="name_on_card"]');
    this.cardNumber = page.locator('input[name="card_number"]');
    this.cvc = page.locator('input[name="cvc"]');
    this.expiryMonth = page.locator('input[name="expiry_month"]');
    this.expiryYear = page.locator('input[name="expiry_year"]');
    this.payButton = page.locator('button#submit');
    
    // Success
    this.orderSuccess = page.locator('p:has-text("Your order has been placed successfully!")');
    this.downloadInvoiceButton = page.locator('a[href="/download_invoice/500"]');
    this.continueButton = page.locator('a[data-qa="continue-button"]');
  }

  async verifyCheckoutPageVisible() {
    await this.checkoutTitle.waitFor({ state: 'visible' });
  }

  async verifyAddressDetails(addressData) {
    const deliveryText = await this.deliveryAddress.textContent();
    const billingText = await this.billingAddress.textContent();
    
    // Verify address contains expected data
    return deliveryText.includes(addressData.address1) && 
           billingText.includes(addressData.address1);
  }

  async enterComment(comment) {
    await this.commentTextarea.fill(comment);
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async fillPaymentDetails(paymentData) {
    await this.nameOnCard.fill(paymentData.nameOnCard);
    await this.cardNumber.fill(paymentData.cardNumber);
    await this.cvc.fill(paymentData.cvc);
    await this.expiryMonth.fill(paymentData.expiryMonth);
    await this.expiryYear.fill(paymentData.expiryYear);
  }

  async confirmPayment() {
    await this.payButton.click();
  }

  async verifyOrderSuccess() {
    await this.orderSuccess.waitFor({ state: 'visible' });
  }

  async downloadInvoice() {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadInvoiceButton.click();
    return await downloadPromise;
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}

module.exports = CheckoutPage;


