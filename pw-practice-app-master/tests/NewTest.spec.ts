import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    
})

test ('Locator Syntax Rules', async ( {page} ) => {
    await page.getByText('Form Layouts').click()
    await page.getByPlaceholder('Jane Doe').fill('Karthik')
    await page.getByPlaceholder('Email').first().fill('Karthik@gmail.com')
    await page.locator('.inline-form-card nb-checkbox :text-is("Remember me")').click()
    await page.getByRole('button', {name: "SUBMIT"})

    const optionsList = await page.locator('nb-radio label').allTextContents()
    console.log(optionsList)
    expect(optionsList).toContain('Option 2')
})

test ('DatePicker', async ( {page} ) => {

    await page.getByText('Datepicker').click()
    await page.getByPlaceholder('Form Picker').click()
    const month = await page.locator('nb-card button').first().textContent()
    expect(month).toEqual(' September 2024 ')
    if(month == ' September 2024 '){
       const dates = await page.locator('nb-calendar-day-cell div').all()
       for(let date of dates ){
         
           if((await date.textContent()).includes('25'))     {
                await date.click()
                break
           }
           
       }
    }
})