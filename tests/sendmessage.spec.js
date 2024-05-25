import {test, expect} from '@playwright/test'

test ('filterjob', async({page})=>{

    await await page.goto("https://minimals.cc/.");
    await page.locator("//a[normalize-space()='Login']").click();
    await page.locator("(//input[@id=':r28:'])[1]").fill("demo@minimals.cc");
    await page.locator("(//input[@id=':r29:'])[1]").fill("demo1234");
    await page.locator("(//button[normalize-space()='Login'])[1]").click();

    //clicked on chat
    await page.locator("//span[contains(text(),'chat')]").click();

    //clicked on deja brady
    await page.locator("//h6[normalize-space()='Deja Brady']").click();

    
    //fill message
    await page.locator("//input[contains(@placeholder,'Type a message')]").fill("Hello, how are you?");

    await page.keyboard.press('Enter');
    

    //await expect(page.locator("//div[contains(text(),'Hello, how are you?')]")).toBeVisible();

    await page.waitForSelector('div:has-text("Hello, how are you?")', { timeout: 10000 });
// Validate that the message is sent and displayed
const sentMessage = await page.textContent('div:has-text("Hello, how are you?")');
await expect(sentMessage).toContain('Hello, how are you?');  

})
