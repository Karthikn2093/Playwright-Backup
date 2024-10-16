import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    
})

test ('DatePicker', async ( {page} ) => {

    let date = new Date()
    let todayDate = date.getDate().toString()
    await page.getByText('Datepicker').click()
    await page.getByPlaceholder('Form Picker').click()
    await page.locator('[class="day-cell ng-star-inserted"]').getByText(todayDate,{exact:true}).click()
})