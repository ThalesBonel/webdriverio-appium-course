describe('Exercise - Udemy Course', () => {
    it('Create an item on the todo list', async () => {
        // create todo list
        await $('//*[@label="Create list"]').click(); 
        await $('//*[@value="List Name"]').addValue("My to do list");
        await $('~Create').click();

        // click on the list
        await $('~My to do list').click();

        // click on create item
        const createBtn = '**/XCUIElementTypeStaticText[`label == "Create item"`]';

        await $(`-ios class chain:${createBtn}`).click();

        // add title
        await $('//*[@value="Title"]').addValue("Walk the dog");

        // click in date on the bottom
        await $('//*[@value="Due"]').click();
        
        // select a date 
        await $('~Date Picker').click();
        await $('~Tuesday, May 30').click();

        // click on the screen
         await $("//XCUIElementTypeWindow[@index=2]").click();

         //click on Create 
         await $('~Create').click();

        // verify title 
        await expect($('~Walk the dog')).toBeExisting();
        
        // verify date
        await expect($('~Due Tomorrow')).toBeExisting();
    })
})