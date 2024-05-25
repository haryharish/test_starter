import {test, expect} from '@playwright/test'

test ('filterjob', async({page})=>{

    await await page.goto("https://minimals.cc/.");
    await page.locator("//a[normalize-space()='Login']").click();
    await page.locator("(//input[@id=':r28:'])[1]").fill("demo@minimals.cc");
    await page.locator("(//input[@id=':r29:'])[1]").fill("demo1234");
    await page.locator("(//button[normalize-space()='Login'])[1]").click();

    //clicked on job
    await page.locator("//span[contains(text(),'job')]").click();

    //clicked on list
    await page.locator("//span[contains(text(),'list')]").click();

    //clicked on filter icon
    await page.locator("//button[normalize-space()='Filters']").click();

    //clicked on demand radio button
    await page.locator("(//input[@type='checkbox'])[3]").click();

    //clicked on closed icon of filter
    await page.locator("//div[contains(@role,'presentation')]//button[2]//*[name()='svg']").click();

    // Validation
    const jobElements = await page.locator("//span[@class='MuiTypography-root MuiTypography-caption MuiTypography-noWrap css-1a2bxk2'][normalize-space()='On Demand']");
    const jobsCount = await jobElements.count();
    expect(jobsCount).toBeGreaterThan(0);

    // Ensure there are no other job types
    const otherJobElements = await page.locator("//div[contains(@class, 'job-item')]//span[@class='MuiTypography-root MuiTypography-caption MuiTypography-noWrap css-1a2bxk2']");
    const otherJobsCount = await otherJobElements.count();
    expect(otherJobsCount).toBe(0);
})