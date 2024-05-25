const {test, expect} = require ('@playwright/test');

test ('login', async({page})=>{

    await page.goto("https://minimals.cc/.");
    await page.locator("//a[normalize-space()='Login']").click();
    await page.locator("(//input[@id=':r28:'])[1]").fill("demo@minimals.cc");
    await page.locator("(//input[@id=':r29:'])[1]").fill("demo1234");
    await page.locator("(//button[normalize-space()='Login'])[1]").click();

    await page.locator("//span[contains(text(),'File Manager')]").click();
    await page.locator("(//input[contains(@type,'checkbox')])[1]").click();

    await page.locator("//button[contains(@aria-label,'Delete')]//*[name()='svg']").click();
    await page.locator("//button[normalize-space()='Delete']").click();

    console.log (await page.locator("//div[@id='notistack-snackbar']").textContent());

    await expect (page.locator("//div[@id='notistack-snackbar']")).toContainText("Delete success!");



})
