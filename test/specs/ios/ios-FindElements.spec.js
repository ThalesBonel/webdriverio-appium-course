describe('IOS Find Elements', () => {

    it('find element by acessibity id', async () => {
        await $('~Alert Views').click();
        await $("~Simple").click();

        expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })

    it('find element by Tag name', async () => {
        // single element
        console.log(await $("XCUIElementTypeStaticText").getText());

        // multiple elements
        const textElements = await $$("XCUIElementTypeStaticText");

        for (const elements of textElements) {
            console.log(await elements.getText());
        }
    })

    it('find element by xpath', async () => {

        await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        await $('//*[@label="Simple"]').click();

        expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    })

    it('find element by class chain', async () => {
        //const alertViews = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertViews = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';

        await $(`-ios class chain:${alertViews}`).click();
        await $('//*[@label="Simple"]').click();
        expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })


    it('find element by predicate string', async () => {
        //const alertViews = 'label == "Alert Views"';
        const alertViews = 'value BEGINSWITH[c] "alert"';

        await $(`-ios predicate string:${alertViews}`).click();
        await $('//*[@label="Simple"]').click();
        expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })

    it.only('Exercise - enter text in the search field, clean it and verify search field', async () => {
        //search btn
        await $('~Search').click();

        //default btn
        await $('~Default').click();

        //search bar
        const searchBar = 'type == "XCUIElementTypeSearchField"';
        const searchBarField = await $(`-ios predicate string:${searchBar}`);

        searchBarField.click();

        //enter text
        await searchBarField.addValue("Escrevendo texto para teste");
        expect(searchBarField).toHaveAttr("value");

        //x btn
        const xBtn = await $('~Clear text');

        xBtn.click();

        //assertion
        expect(searchBarField).not.toHaveAttr("value");

    })
}) 