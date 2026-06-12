import { test } from '@playwright/test';
test.describe('Timeout Simulation', () =>
{
    test('Timeout 1 - Test Timeout',async () =>{
        test.setTimeout(2000);
        await new Promise(resolve=> setTimeout(resolve,7000));
    });
    test('Timeout 2 - Action Timeout',async ({page}) =>{
        await page.goto('https://demoqa.com/browser-windows');
        await page.locator('#fakeButton').click();
    });
    test('Timeout 3 - Navigation Timeout',async ({page}) =>{
        await page.goto('https://10.255.255.1',{
            timeout:5000
        });
        
    });
    
});