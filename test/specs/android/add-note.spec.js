describe('Tets', () => {
    it('Skip tutorial', async () => {
        // click on skip
        await $('//*[@text="SKIP"]').click();

        //assert text in display
        expect(await $('//*[@text="Add note"]')).toBeDisplayed();
    })

    it('add note, save changes & verify note', async () => {
        //click on add note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();

        //click text
        await $('//*[@text="Text"]').click();

        //assert edit screen
        expect($('//*[@text="Editing"]')).toExist();

        //add value on title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .addValue("Fav Anime List");

        //add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .addValue("Naruto\nDemon Slayer\nBoku no Hero");
        
        //save the changes
        await driver.back()
        await driver.back()

        //assertions
        expect(await $('//*[@resouce-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
            .toBeDisabled();

        expect(await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'))
            .toHaveText("Naruto\nDemon Slayer\nBoku no Hero");
    })

    it.only('Exercise - Deleting a note', async () => {
        const titleText = "Fav Anime List";
        const bodyText = "Naruto\nDemon Slayer\nBoku no Hero";

        await $('//*[@text="SKIP"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]').click();
        await $('//*[@text="Text"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .addValue(titleText);
 
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .addValue(bodyText);
         
        //save the changes
        await driver.back()
        await driver.back()

        //back to note list
        await driver.back()

        expect(titleText).toExist();

        await $('//*[@text="Fav Anime List"]').click();
        await $('//*[@content-desc="More"]').click();
        await $('//*[@text="Delete"]').click();
        await driver.acceptAlert();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Trash Can"]').click();

        expect(await $('//*[@text="Fav Anime List"]')).toBeDisplayed();
        await driver.pause(2000);




    })
})