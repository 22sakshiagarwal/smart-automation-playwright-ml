// tests/login.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.js';

// Test data
const creds = {
  validUsername: "tomsmith",
  validPassword: "SuperSecretPassword!",
  invalidUsername: "wrongUser",
  invalidPassword: "wrongPass123"
};

test.describe('HerokuApp Login Test Suite', () => {

  test('TC01_valid_login @TC01_valid_login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.login(creds.validUsername, creds.validPassword);

    await expect(login.flashMessage).toContainText('You logged into a secure area!');
    await expect(page).toHaveURL(/.*\/secure/);
  });

  test('TC02_invalid_username @TC02_invalid_username', async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.login(creds.invalidUsername, creds.validPassword);

    await expect(login.flashMessage).toContainText('Your username is invalid!');
  });

  test('TC03_invalid_password @TC03_invalid_password', async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.login(creds.validUsername, creds.invalidPassword);

    await expect(login.flashMessage).toContainText('Your password is invalid!');
  });

  test('TC04_both_empty @TC04_both_empty', async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.login('', '');

    await expect(login.flashMessage).toContainText('Your username is invalid!');
  });

  test('TC05_special_chars @TC05_special_chars', async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.login('@#$%', '%^&&*');

    await expect(login.flashMessage).toContainText('Your username is invalid!');
  });

  test('TC06_empty_username @TC06_empty_username', async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.login('', creds.validPassword);

    await expect(login.flashMessage).toContainText('Your username is invalid!');
  });

  test('TC07_empty_password @TC07_empty_password', async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.login(creds.validUsername, '');

    await expect(login.flashMessage).toContainText('Your password is invalid!');
  });

  test('TC08_logout @TC08_logout', async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.login(creds.validUsername, creds.validPassword);

    await login.logout();
    await expect(login.flashMessage).toContainText('You logged out of the secure area!');
  });

  test('TC09_access_secure @TC09_access_secure', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/secure');

    await expect(page.locator('#flash')).toContainText('You must login to view the secure area!');
  });

  test('TC10_whitespace @TC10_whitespace', async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.login(`  ${creds.validUsername}  `, `  ${creds.validPassword}  `);

    await expect(login.flashMessage).toContainText('Your username is invalid!');
  });

});
