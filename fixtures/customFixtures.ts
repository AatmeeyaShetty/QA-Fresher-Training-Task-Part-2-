import { test as base } from '@playwright/test';
import { BrowserWindowsPage } from '../pages/BrowserWindowsPage';
import { Logger } from '../utils/Logger';

type MyFixtures = {
    browserWindowsPage: BrowserWindowsPage;
    logger: Logger;

};
export const test = base.extend<MyFixtures>({
    browserWindowsPage: async ({page},use)=>{
        await use(new BrowserWindowsPage(page));
    },
    
    logger: async ({},use)=>{
        await use(new Logger());
    },

});
export { expect } from '@playwright/test';

