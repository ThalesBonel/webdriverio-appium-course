const HomeScreen = require("./homeScreen")

class AddNoteScreen {
    get txtBody() {return $('//*[@text="Text"]')};
    get editingTxt() {return $('//*[@text="Editing"]')};
    get titleField() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')};
    get noteBody() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')}
    get moreBtn() {return $('//*[@content-desc="More"]')};
    get deleteBtn() {return $('//*[@text="Delete"]')};

    async saveNote() {
        await driver.back()
        await driver.back()
    }

    async createNote(titleTxt, bodyTxt) {
        await HomeScreen.addNoteBtn.click();
        await this.txtBody.click();
        await this.titleField.addValue(titleTxt);
        await this.noteBody.addValue(bodyTxt);
    }

}

module.exports = new AddNoteScreen();

// export default new AddNoteScreen();