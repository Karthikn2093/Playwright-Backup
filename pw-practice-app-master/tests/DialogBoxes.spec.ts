import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')  
})


test('DialogBox', async({page}) => {
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    page.on('dialog', dialog => dialog.accept());

    await page.getByRole('table').locator('tr').locator('.nb-trash').first().click()
    
    

})