import {test, expect} from '@playwright/test'


test ('searchorder', async({page})=>{

    await page.goto("https://minimals.cc/.");
    await page.locator("//a[normalize-space()='Login']").click();
    await page.locator("(//input[@id=':r28:'])[1]").fill("demo@minimals.cc");
    await page.locator("(//input[@id=':r29:'])[1]").fill("demo1234");
    await page.locator("(//button[normalize-space()='Login'])[1]").click();

    await page.locator("//span[contains(text(),'order')]").click();
    await page.locator("//span[contains(text(),'list')]").click();
    await page.getByPlaceholder('Search customer or order number...').pressSequentially("cor");

    await page.waitForLoadState('networkidle');

    const elementsCount = await page.locator('//*[contains(text(), "Cortez Herring")]').count();
    expect(elementsCount).toBe(1);

})