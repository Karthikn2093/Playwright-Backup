import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')
  
    
})

test ('Sliders', async ( {page} ) => {
    
    const slider = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
    await slider.evaluate( node =>{
        node.setAttribute('cx','269.387')
        node.setAttribute('cy','160.492')
    })
    await slider.click()
})

test.only ('Sliders with mouse movement', async ( {page} ) => {
    
    const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
    await tempBox.scrollIntoViewIfNeeded()

    
})