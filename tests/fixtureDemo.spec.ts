import { test, expect } from '../fixtures/customFixtures';

test('Fixture Test - Browser Window', async ({ browserWindowsPage, page, logger }) => {
    logger.log('Opening Browser Windows Page');
    await browserWindowsPage.navigate(); 
    const title = await page.title();
    await expect(page).toHaveTitle(/demosite/i);
});