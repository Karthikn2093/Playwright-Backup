import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')
    
})
test("ThemeTest", async({page}) => {
    await page.getByRole('button', {name: 'Light'}).click()
    const themes = await page.locator('ul nb-option').all()
    for(let theme of themes){
        if((await theme.textContent()).includes('Corporate')){
            await theme.click()
            break
        }
    }
})