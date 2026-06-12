import { test, expect} from '@playwright/test';
test.describe('Failure Simulation',() =>
{
    test('Failure 1 - Assertion Failure',async({page}) =>{
        await page.goto('https://demoqa.com/browser-windows');
        await expect (page.locator('.main-header')).toHaveText('Wrong Text');
    });
    test('Failure 2 - Element not found',async({page}) =>{
        await page.goto('https://demoqa.com/browser-windows');
        await page.locator('#invalidButton').click();
    });
    test('Failure 3 - Invalid URL Navigation',async({page}) =>{
        await page.goto('https://invalidwebsite123456.com');
    });
    test('Failure 4 - Strict Mode Violation',async({page}) =>{
        await page.goto('https://demoqa.com/browser-windows');
        await page.locator('button').click();
    });
    test('Failure 5 - Popup Event Timeout',async({page}) =>{
        const popupPromise = page.waitForEvent('popup');
        await page.goto('https://demoqa.com/browser-windows');
        await page.locator('body').click();
        await popupPromise;
    });

});