import ListScreen from '../../screenobjects/ios/list.screen';
import ItemScreen from '../../screenobjects/ios/item.screen';

describe('Exercise - Udemy Course', () => {
    
    before(async () => {
        // create todo list
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("My to do list");
        await ListScreen.createBtn.click();
        await ItemScreen.myList.click();
        await ItemScreen.createItemBtn.click();
        await ItemScreen.addOnList.addValue("Walk the dog");
    });

    // PLAYING WITH BEFORE/AFTER HOOKS
    // after(async ()=> {
    //     console.log("AFTER HOOK");
    // });
    // beforeEach(async ()=> {
    //     console.log("BEFORE EACH HOOK");
    // });
    // afterEach(async ()=> {
    //     console.log("AFTER EACH HOOK");
    // });


    it('Create an item on the todo list', async () => {

        //Create Todo Item
        await ItemScreen.dueBtn.click();
        await ItemScreen.datePicker.click();
        await ItemScreen.getByAcessibilityId("Wednesday, May 31").click();
        await ItemScreen.outOfDatePicker.click();
        await ItemScreen.createItemFinalBtn.click();

        // verify title 
        await expect(await ItemScreen.getByAcessibilityId("Walk the dog")).toBeExisting();
        // verify date
        await expect(await ItemScreen.getByAcessibilityId("Due Tomorrow")).toBeExisting();

    })
})