import { test, expect} from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';

test.describe('Login Tests', () =>{

  test.beforeEach(async ({page}) =>{
    await page.goto("https://www.saucedemo.com/");
  });

  test('Valid Login', async({page})=>{
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('/inventory.html');
  });

  test('Invalid Login', async({page})=>{
    await page.locator('#user-name').fill('invalid_user');
    await page.locator('#password').fill('invalid_password');
    await page.locator('#login-button').click();
    const error = await page.locator('.error-message-container.error > h3').textContent();
    console.log(error);
  }
  );

  test('Login using page', async({page})=> {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user','secret_sauce');
   });
   
  test('Login using invalid', async({page})=> {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invaliduser','secret_sauce');
   });

   
  test.afterEach(async ({page}) =>{
    await page.close();
  });

  test('multiple tabs', async ({ context }) => {
    const page1 = await context.newPage(); //new incognito window
    await page1.goto('https://google.com'); //open google on first tab
    
    
    const page2 = await context.newPage(); //new incognito window
    await page2.goto('https://bing.com'); //open bing on second tab

  });


  test('Admin user', async ({ browser}) => {
    const adminContext = await browser.newContext();
    const userContext = await browser.newContext();

    const adminPage = await adminContext.newPage();
    const userPage = await userContext.newPage();

    await adminPage.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await userPage.goto('https://demo.nopcommerce.com/');

    await adminPage.fill('[name="Email"]', 'admin@yourstore.com');
    await adminPage.fill('[name="Password"]', 'admin');
    await adminPage.click('[value="Log in"]');
    await expect(adminPage).toHaveTitle(/Dashboard/);
    
    //perform action to create new user login password

    await userPage.goto('https://demo.nopcommerce.com/');
    await userPage.fill('[id="small-searchterms"]', 'Apple MacBook Pro 13-inch');
    await userPage.click('[type="submit"]');
  });

});

//browser : Chrome Application / Firefox Application / Chromium Application 

//BrowserContext : Incognito Window / Private Window / user profiles
//when to use : 
    // parallel execution of tests
    // no data leakage between tests
    // store authentication cookies and local storage

//page : tab in browser context / browser window


// browser = launch browser
// conext = new context
// page = new page/tab/window