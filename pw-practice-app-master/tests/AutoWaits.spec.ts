import {expect, test} from '@playwright/test'

test ('First Test', async ( {page} ) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.locator('#ajaxButton').click()
    
    const textContent = await page.locator('.bg-success').textContent()
    expect(textContent).toContain('Data')
})