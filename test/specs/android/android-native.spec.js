// activity .app.AlertDialogSamples
// package io.appium.android.apis
var assert = require('chai').assert

describe('Using Android Activity', () => {
    it('Acess screen with Activit', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")

        await browser.pause(2000);

        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working with Dialog Boxes', async () => {
        //access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        
        // click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //get alert text
        console.log("Dialog text ------> ", await driver.getAlertText());

        // accept alert
        //await driver.acceptAlert();

        //dismiss alert
        //await driver.dismissAlert();


        //click on OK button
        //await (await $('//*[@resource-id="android:id/button1"]')).click();

        //click on Cancel button
        await (await $('android=new UiSelector().textContains("Cancel")')).click();

        
        // assertion
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })

    it('Vertical Scroll', async () => {
        await $('~App').click();

        await $('~Activity').click();

        //not stable (if element gets moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        //await $('~Secure Surfaces').click();

        // scrollTextIntoView
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        await expect($('~Secure Dialog')).toExist();

    })

    it('Horizontal Scroll', async () => {
        await driver.startActivity("io.appium.android.apis", ".view.Gallery1");
    
        // scrollForward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(2)')

        // scrollBackward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')

    })

    it.only('Exercise - Scrolling', async () => {
        await $('~Views').click();
        await $('~Date Widgets').click();
        await $('~1. Dialog').click();
        const currentDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        await $('~change the date').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('~10 May 2023').click();
        await $('//*[@resource-id="android:id/button1"]').click();
        const newDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();

        expect(currentDate).not.toEqual(newDate);
        assert.notEqual(currentDate, newDate, 'Dates are different from each other!!!');
    })
})