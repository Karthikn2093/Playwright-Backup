import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')  
})


test('WebTables', async({page}) => {
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

   
    

})