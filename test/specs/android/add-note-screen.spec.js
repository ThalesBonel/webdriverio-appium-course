const AddNoteScreen = require("../../screenobjects/android/AddNoteScreen");
const HomeScreen = require("../../screenobjects/android/homeScreen");

describe('Tets', () => {
    const titleText = "Fav Anime List";
    const bodyText = "Naruto\nDemon Slayer\nBoku no Hero";

    it('Skip tutorial', async () => {
        // click on skip
        await HomeScreen.skipbtn.click();

        //assert text in display
        expect(await HomeScreen.addNoteTxt).toBeDisplayed();
    })

    it('add note, save changes & verify note', async () => {
        //click on add note
        await HomeScreen.addNoteBtn.click();

        //click text
        await AddNoteScreen.txtBody.click();

        //assert edit screen
        expect(await AddNoteScreen.editingTxt).toExist();

        //add value on title
        await AddNoteScreen.titleField.addValue(titleText);

        //add note body
        await AddNoteScreen.noteBody.addValue(bodyText);
        
        //save the changes
        await driver.back()
        await driver.back()

        //assertions
        expect(await AddNoteScreen.editingTxt).toBeDisplayed();

        expect(await AddNoteScreen.noteBody).toHaveText(bodyText);
    })

})