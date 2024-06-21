class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('input[name = "username"]');
    this.password = page.locator('input[name = "password"]');
    this.signInButton = page.locator('button[type="submit"]');
  }
  async goToPage() {
    this.page.goto("https://www.instagram.com/");
  }
  async validLogin(uname, passk) {
    await this.username.fill(uname);
    await this.password.fill(passk);
    await this.signInButton.click();
  }
}
module.exports = { LoginPage };

//await expect(page).toHaveTitle('Instagram');
//const un = await page.locator('input[name = "username"]').inputValue();
//await expect(un).toBe('skaptean');

//const ps = await page.locator('input[name = "password"]').inputValue();
//await expect(ps).toBe('Kh@12345');

//await expect(locator).toContainText()
