import {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-Objects/navigationPage'

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')    
})

test ('Navigate to Forms Page', async ( {page} ) => {
    
    const navigateTo = new NavigationPage(page)
    await navigateTo.formsLayoutPage()
    
})
