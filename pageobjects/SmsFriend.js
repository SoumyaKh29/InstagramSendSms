const {expect} = require('@playwright/test');
class SmsFriend {
  constructor(page) {
    this.page = page;
  }
  async findFriend(name) {
    await this.page.getByRole('button', { name: 'New message', exact: true }).click();
    const search = this.page.locator('input[name ="queryBox"]')
    await search.click();
    await search.fill(name);
    const loc = this.page.locator("span.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft").filter({ hasText: name });
    await expect(loc).toBeVisible();
    //await expect(loc).toHaveText("");
    await loc.click();
    await this.page.locator('div[role ="button"]').filter({ hasText: "Chat" }).click();
  }

  async sendSms(smsString) {
    const mess = this.page.locator('div[aria-label="Message"]');
  await mess.click();
  await mess.fill(smsString);
  await expect(this.page.getByText('Send')).toBeVisible();
  await this.page.getByText('Send').click();
  const ome = this.page.locator('div.x126k92a.xyk4ms5').filter({ hasText: smsString });
  await expect(ome).toBeVisible();
  }

}
module.exports = { SmsFriend };
