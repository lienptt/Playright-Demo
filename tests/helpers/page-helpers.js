/**
 * Page Helper Functions
 */
class PageHelpers {
  static async waitForNavigation(page, action) {
    await Promise.all([
      page.waitForNavigation(),
      action()
    ]);
  }

  static async takeScreenshot(page, name) {
    await page.screenshot({ path: `test-results/${name}.png` });
  }

  static async fillForm(page, formData) {
    for (const [selector, value] of Object.entries(formData)) {
      await page.fill(selector, value);
    }
  }
}

module.exports = PageHelpers;


