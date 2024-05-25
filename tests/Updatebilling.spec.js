
const { test, expect } = require('@playwright/test');
const exp = require('constants');
test('update', async ({ page }) => {

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
    await page.getByRole('button', { name: 'Lucian Obrien 1147 Rohan' }).click();

    await page.getByRole('button', { name: '**** **** ****' }).click()
    await page.getByRole('heading', { name: '**** **** **** 1234' }).click();

    await page.waitForLoadState('networkidle');
    page.waitForTimeout(2000);


    // validation Name
    //const updatedBillingNameVisible = await page.locator("//button[contains(@class, 'MuiButtonBase-root') and normalize-space(text())='Deja Brady']").isVisible();
    //button[normalize-space()='Deja Brady']

    //validation name
    const updatedBillingNameButton = await page.locator("//button[contains(@class, 'billing-name-button') and text()='Deja Brady']");
    const isVisible = await updatedBillingNameButton.isVisible();
    console.log(isVisible);

    //validation card
    const selectedPaymentMethod = await page.locator("//button[normalize-space()='**** **** **** 1234']").isVisible();
    expect(selectedPaymentMethod).toBe(true);

})

