/**
 * Base Page Object - Class cơ bản cho tất cả các page objects
 */
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }

  async waitForLoadState(state = 'networkidle') {
    await this.page.waitForLoadState(state);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async fill(selector, text) {
    await this.page.fill(selector, text);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }
}

module.exports = BasePage;

