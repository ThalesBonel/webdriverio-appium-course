const AddNotesScreen = require("../../screenobjects/android/AddNoteScreen");
const HomeScreen = require("../../screenobjects/android/homeScreen");

describe('Delete Note', () => {
    it('Should delete the note', async () => {
        const titleText = "Fav Anime List";
        const bodyText = "Naruto\nDemon Slayer\nBoku no Hero";

        await HomeScreen.clickSkipBtn();
        await AddNotesScreen.createNote(titleText, bodyText)
        
        //save the changes
        await AddNotesScreen.saveNote();

        //back to note list
        await driver.back()

        expect(titleText).toExist();

        await HomeScreen.note.click();
        await AddNotesScreen.moreBtn.click();
        await AddNotesScreen.deleteBtn.click();
        await driver.acceptAlert();

        await HomeScreen.optionsBtn.click();
        await HomeScreen.trashCanBtn.click();

        expect(await HomeScreen.note).toBeDisplayed();
    })
})