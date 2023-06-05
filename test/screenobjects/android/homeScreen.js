class HomeScreen {
    get skipbtn() {return $('//*[@text="SKIP"]')};
    get addNoteTxt() {return $('//*[@text="Add note"]')};
    get addNoteBtn() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]')};
    get note() {return $('//*[@text="Fav Anime List"]')};

    get optionsBtn() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')};
    get trashCanBtn() {return $('//*[@text="Trash Can"]')};
    
    async clickSkipBtn() {
        await this.skipbtn.waitForDisplayed();
        await this.skipbtn.click();
    }
}

module.exports = new HomeScreen();