describe('Webview tests', async () => {

    it('Access external link and verify content in the browser', async () => {
        //click on skip
       await $('//*[@text="SKIP"]').click();

        //click on the nav bar
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //click on fb link
        await $('//*[@text="Like us on Facebook"]').click();

        //get current context
        // console.log(await driver.getContext()); 

        //get all the contexts
        await driver.getContexts();

        //switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome');

        //assert the cover image is displayed
        // const titleName = await $('span.x193iq5w h1');
        // await expect(titleName).toExist();

        //switch back to app
        await driver.switchContext('NATIVE_APP');
        await driver.back();

        //continue navegate on the app..
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon"]').click();

        const addNoteText = await $('//*[@text="Add note"]');
        expect(addNoteText).toBeDisplayed();
    })
})