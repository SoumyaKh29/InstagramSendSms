const {expect} = require('@playwright/test');
class Confirmations {
  constructor(page) {
    this.page = page;
  }
  async skipSaveLogin() {
    await expect(this.page.getByText("Save your login info?")).toBeVisible();
    await this.page.getByText("Not now").click();
  }
  async keepNotificationOff() {
    await this.page.locator('span:has-text("Turn on Notifications")');
    await this.page.getByText("Not now").click();
  }
}
module.exports = { Confirmations };
