const {expect} = require('@playwright/test');
class OptionPanel {
    constructor(page) {
      this.page = page;
    }
    async messagePanel() {
        await expect(this.page.locator('svg[aria-label="Messenger"]')).toBeVisible();
        await this.page.locator('svg[aria-label="Messenger"]').click();
    }
   
  }
  module.exports = { OptionPanel };