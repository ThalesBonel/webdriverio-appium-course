class ItemScreen {
    const 

    get myList() {
        return $('~My to do list');
    }

    get createItemBtn() {
        return $('//*[@name="Create item"]')
    }

    get addOnList() {
        return $('//*[@value="Title"]');
    }

    get dueBtn() {
        return $('//*[@value="Due"]');
    }

    get datePicker() {
        return $('~Date Picker');
    }

    get outOfDatePicker() {
        return $("//XCUIElementTypeWindow[@index=2]");
    }

    get createItemFinalBtn() {
        return $('~Create');
    }

    getByAcessibilityId(id) {
        return $(`~${id}`);
    }

}

export default new ItemScreen();