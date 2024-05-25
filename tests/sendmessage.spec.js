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

    await page.pause();
    //fill message
    await page.locator("//input[contains(@placeholder,'Type a message')]").fill("Hello, how are you?");

    await page.keyboard.press('Enter');
    await page.pause();
    

    //await expect(page.locator("//div[contains(text(),'Hello, how are you?')]")).toBeVisible();

    const sentMessage = await page.textContent("//div[contains(text(),'Hello, how are you?')]");  // Adjust selector based on your website
    await expect(sentMessage).toContain('Hello, how are you?');
    

})
