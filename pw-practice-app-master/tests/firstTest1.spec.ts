import {test} from '@playwright/test'

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test ('Locator Syntax Rules', async ( {page} ) => {

    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    
})