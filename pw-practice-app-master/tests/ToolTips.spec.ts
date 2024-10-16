import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')  
})


test('Checkboxes', async({page}) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()
    await page.getByRole('button',{name:'TOP'}).hover()

    const tooltip = await page.locator('nb-tooltip').textContent()
    expect(tooltip).toEqual('This is a tooltip')

})