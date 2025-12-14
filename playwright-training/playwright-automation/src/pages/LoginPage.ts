import { Page, Locator } from '@playwright/test';


export class LoginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(driver:Page){
        this.page = driver;
        this.username = driver.locator('#username');
        this.password = driver.locator('#password');
        this.loginButton = driver.locator('#login');
    }

    async goto(){
        await this.page.goto('/login');
    }

    async login(user:string, pass:string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }
}
