describe('Android Find Elements Tests', () => {
    it('Should find element by acessibility ID', async () => {

        //find element with acessibility id
        const appOptin = await $('~App') 

        //click on element
        await appOptin.click()

        expect(appOptin)
        
        // assertion 
        const actionBar = await $('~Action Bar') 
        expect(actionBar).toBeExisting()
    }) 

    it.skip('Find Element bu class name', async () => {
        
        //find element by class name
        const className = await $('android.widget.TextView')

        // assertion
        expect(className).toHaveText("API Demos")
    })
    xit('Find elements by xpath', async () => {
        
        // await appOptin.click()

        //xpath - (//tagname[@attribute=value]) and click
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()

        // find list dialog an click
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()

        //find Command two
        await $('//android.widget.TextView[@text="Command two"]').click()

        // assertion text
        const text = await $('//android.widget.TextView[@text="You selected: 1 , Command two"]').getText()
        expect(text).toHaveText("You selected: 1 , Command two")
    })

    it('Find Elements by UIAutomator', async () => {
        // find by text contains
        await $('android=new UiSelector().textContains("Alert")').click()
    })

    it('Practicing', async () => {
        //Getting element and scroll to Webview
        await $('android=new UiSelector().textContains("Views")').click()
        const element = 'new UiScrollable(new UiSelector().scrollable(true).instance(0)).getChildByText(new UiSelector().className("android.widget.TextView"), "WebView")'

        const webViewBtn = await $(`android=${element}`)
        await webViewBtn.click()
    })

    it('Find multiple elements', async () => {
        const expectedList = [
            "API Demos",
            "Access'ibility",
            "Accessibility",
            "Animation",
            "App",
            "Content",
            "Graphics",
            "Media",
            "NFC",
            "OS",
            "Preference",
            "Text",
            "Views"
        ]

        const actualList = []
        // find multiple elements
        const textList = await $$('android.widget.TextView');

        // loop though them
        for (element of textList) {
            actualList.push(await element.getText());
        }

        //assert the list
        expect(actualList).toEqual(expectedList);
    })

    it.only('Exercise - insert text in Country Field', async () => {
        const viewsBtn = await $('~Views');
        await viewsBtn.click()

        const autoCompleteBtn = await $('//android.widget.TextView[@text="Auto Complete"]');
        await autoCompleteBtn.click()

        const screenTopBtn = await $('android=new UiSelector().text("1. Screen Top")');
        await screenTopBtn.click()

        const countryTextField = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/edit")')
        await countryTextField.click();
        await countryTextField.addValue("Brasil");

        expect(countryTextField).toHaveText("Brasil")
    })
})



