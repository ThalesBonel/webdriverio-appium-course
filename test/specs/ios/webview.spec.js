describe('IOS Webwiew', async () => {
    it('some text', async () => {

        await $('~Webview').click();

        //wait until you get multiple context
        await driver.waitUntil(async () => {
            const contexts = await driver.getContexts();
            return contexts.length > 1
        }, {timeout: 30000, timeoutMsg: 'Timed out waiting for another context'});

         //get all the contexts
         const webView = await driver.getContexts();
         //[NATIVE_APP, WEBVIEW_XXXX]

        //switch to the webview context
        await driver.switchContext(webView[1]);

        // assertion
        const element = $('.hero__subtitle');
        expect(element).toHaveTextContaining('automation');

        //switch back to the native app
        await driver.switchContext('NATIVE_APP');
        await $('~Home').click();

        //assertion
        const  webdriverTxt = await $('//*[@name="WEBDRIVER"]');
        await expect(webdriverTxt).toBeDisplayed();
    })
})