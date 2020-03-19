const path = require('path')

describe('app', () => {
  beforeAll(async () => {
    // await page.goto('https://localhost:3000/2019-2-Track-Frontend-A-Goryakin')
    await page.goto('http://localhost:3000/2019-2-Track-Frontend-A-Goryakin')
  }, 30000)

  it('should login, create new chat, open chat, send message', async () => {
    /* page.on('dialog', async dialog => {
      await page.waitFor(2000)
      await dialog.accept('2')
    }) */

    await expect(page).toMatch('Log in with VK')
    /* await page.click('a[name="authVK"]')
    await page.waitFor(3000)
    await expect(page).toFill('input[name="email"]', "user_email")
    await expect(page).toFill('input[name="pass"]', 'user_password')
    await page.click('button[id="install_allow"]')
    await page.waitFor(3000)
    await page.click('svg[name="ncb"]')
    await page.waitFor(3000)
    await page.click('a[name="15"]')
    await page.waitFor(2000)
    await expect(page).toFill('textarea[id="message_input"]', 'привет!')
    await page.waitFor(2000)
    await page.keyboard.press('Enter')
    await page.click('a[name="return"') */
  }, 60000)

  it('should login, open chat, send message', async () => {
    await expect(page).toMatch('Log in with VK')

    /* await page.waitFor(3000)
    await page.click('a[name="15"]')
    await page.waitFor(2000)
    await expect(page).toFill('textarea[id="message_input"]', 'Как дела?')
    await page.waitFor(2000)
    await page.keyboard.press('Enter')
    await page.click('a[name="return"') */
  }, 60000)

  it('should open profile page and return', async () => {
    await expect(page).toMatch('Log in with VK')

    /* await page.waitFor(3000)
    await page.click('a[name="profile"')
    await page.waitFor(2000)
    await page.click('a[name="return"')
    */
  }, 60000)

  it('should open settings page and return', async () => {
    await expect(page).toMatch('Log in with VK')

    /* await page.waitFor(3000)
    await page.goto('http://localhost:3000/settings')
    await page.waitFor(2000)
    await page.click('a[name="return"') */
  }, 60000)
})
