const ListScreen = require('../../screenobjects/ios/list.screen')

describe('Todo List', () =>{
    it('Create a Todo List', async () =>  {
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Todo list for today");
        await ListScreen.createBtn.click();

        await expect(await ListScreen.listNameField("Todo list for today")).toBeExisting();
    })
})


