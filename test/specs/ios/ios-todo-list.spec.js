describe('Todo List', () =>{
    it('Create a Todo List', async () =>  {
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Todo list for today");
        await $('~Create').click();

        await expect(await $('~Todo list for today')).toBeExisting();
    })
})


