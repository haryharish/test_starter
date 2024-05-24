
const {test, expect }= require ('@playwright/test');
const exp = require('constants');
test ('update', async({page})=>{

    await page.goto("https://minimals.cc/.");
    await page.locator("//a[normalize-space()='Login']").click();
    await page.locator("(//input[@id=':r28:'])[1]").fill("demo@minimals.cc");
    await page.locator("(//input[@id=':r29:'])[1]").fill("demo1234");
    await page.locator("(//button[normalize-space()='Login'])[1]").click();
    
    await page.locator("(//button[@type='button'])[1]").click();
    await page.locator("//span[contains(text(),'user')]").click();
    await page.locator("//span[contains(text(),'account')]").click();
    await page.locator("//button[normalize-space()='Billing']").click();

    await page.getByRole('button', { name: 'Jayvion Simon' }).click();
   await page.getByRole('button', { name: 'Lucian Obrien 1147 Rohan' }).click()
   await expect (page.getByRole('button', { name: 'Lucian Obrien 1147 Rohan' })).toContainText("Lucian Obrien")

   await page.getByRole('button', { name: '**** **** ****' }).click();
   await page.getByRole('heading', { name: '**** **** **** 1234' }).click();
   await expect (page.getByRole('heading', { name: '**** **** **** 1234' })).toContainText("**** **** **** 1234")
   await page.pause();

})

