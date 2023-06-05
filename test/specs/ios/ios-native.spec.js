describe('IOS native Feature', () => {
    it('Working with alert box', async () => {

        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        console.log(await driver.getAlertText());
        //await $('~OK').click();
        await driver.dismissAlert();

        await expect($('~OK')).not.toExist();
    })

    it('Working with Scrollable elements', async () => {

        await driver.execute('mobile: scroll', {direction: "down"});
        await driver.execute('mobile: scroll', { direction: "up"});

        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const blueicker = await $('~Blue color component value');

        await driver.execute('mobile: scroll', {element: redPicker.elementId, direction: "down"});
        await driver.execute('mobile: scroll', {element: blueicker.elementId, direction: "up"});

    })

    it.only('Working with Scrollable elements', async () => {
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const greenPicker = await $('~Green color component value');
        const bluePicker = await $('~Blue color component value');

        //set purple color (125, 0, 125)
        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');

        await driver.pause('2000');

    })
})