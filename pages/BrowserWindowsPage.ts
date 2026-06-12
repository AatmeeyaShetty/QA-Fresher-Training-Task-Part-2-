import { Page } from '@playwright/test';
export class BrowserWindowsPage {
    constructor (private page: Page){}
        async navigate(){
            await this.page.goto("https://demoqa.com/browser-windows",{ waitUntil: 'domcontentloaded'});

        }
        async clickNewTab(){
            await this.page.locator('#tabButton').click();
        }
    
        async clickNewWindowMessage(){
            this.page.locator('#messageWindowButton').click();

        }
}
