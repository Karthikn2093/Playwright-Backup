import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')  
})

test.describe ('Form Layouts Page', ()  => {
    test.beforeEach(async({page}) =>{
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()  
    })

    test ('Input Fields', async ( {page} ) => {
        const emailInput = page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox',{name:'email'})
        await emailInput.fill('Karthikn2093@gmail.com')
        await emailInput.clear()
    })

    test ('Radio Buttons', async ( {page} ) => {
        const gridLocator = page.locator('nb-card', {hasText:"Using the Grid"})
        await gridLocator.getByLabel('Option 1').check({force:true})
        //General Assertion
        const radioStatus = await gridLocator.getByRole('radio',{name: "Option 1"}).isChecked()
        expect(radioStatus).toBeTruthy()
        //Locator Assertion
        await expect(gridLocator.getByRole('radio',{name: "Option 1"})).toBeChecked()

        await gridLocator.getByRole('radio',{name: "Option 2"}).check({force: true})
        expect(await gridLocator.getByRole('radio',{name: "Option 1"}).isChecked()).toBeFalsy()
        expect(await gridLocator.getByRole('radio',{name: "Option 2"}).isChecked()).toBeTruthy()
    })
})

test('Checkboxes', async({page}) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()

    await page.getByRole('checkbox', {name: "Hide on click"}).uncheck({force:true})

    const allCheckBoxes = page.getByRole('checkbox')
    for(const box of await allCheckBoxes.all()){
        await box.check({force:true})
        expect(await box.isChecked()).toBeTruthy()
    }
})

test.only('Lists & Dropdowns', async({page}) => {
    await page.getByRole('button', {name: 'Light'}).click()
    //const optionsList = await page.getByRole('list').locator('nb-option')
    const optionsList = page.locator('nb-option-list nb-option')
    await expect(optionsList).toHaveText(["Light","Dark","Cosmic","Corporate"])
    await optionsList.filter({hasText:"Cosmic"}).click()
    const header = page.locator('nb-layout-header')
    await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)')

    const colors = {
        "Light" : "rgb(255, 255, 255)",
        "Dark" : "rgb(34, 43, 69)",
        "Cosmic" : "rgb(50, 50, 89)",
        "Corporate" : "rgb(255, 255, 255)"
    }
    await page.locator('ngx-header nb-select').click()
    for(const color in colors){
        await optionsList.filter({hasText: color}).click()
        await expect(header).toHaveCSS('background-color', colors[color])
        if(color != 'Corporate'){
            await page.locator('ngx-header nb-select').click()
        }
        
    }
    
})