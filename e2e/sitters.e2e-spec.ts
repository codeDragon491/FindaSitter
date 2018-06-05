import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";

/***************** BROWSER RUNNING SPEED ****************/

let origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function () {
    let args = arguments;

    // queue 100ms wait
    origFn.call(browser.driver.controlFlow(), function () {
        return protractor.promise.delayed(100);
    });

    return origFn.apply(browser.driver.controlFlow(), args);
};

/**********************************************************/

describe("Component: Register as a sitter", () => {
    it("1: Should create a new sitter", async () => {
        browser.get('/register-sitter');
        // Do something
        element(by.id('firstname')).sendKeys('Susan')
            .then(() =>
                element(by.id('lastname')).sendKeys('Winston'))
            .then(() =>
                element(by.id('birthdate')).sendKeys('4/18/2018'))
            .then(() =>
                element(by.id('gender')).all(by.tagName('mat-radio-button')).get(0).click())
            .then(() =>
                element.all(by.css('mat-select')).each(function (eachElement) {
                    eachElement.click() //select the select
                        .then(() =>              //wait for the renderings to take effect
                            element(by.css('mat-option')).click()) //select the first mat-option
                }))
            .then(() =>
                element(by.id('username')).sendKeys('s.w@com'))
            .then(() =>
                element(by.id('password')).sendKeys('susu123W'))
            .then(() =>
                //element(by.id('register')).click()
                element(by.css('form')).submit())
            .then(() =>
                element(by.id('username')).sendKeys('s.w@com'))
            .then(() =>
                element(by.id('password')).sendKeys('susu123W'))
            .then(() =>
                //element(by.id('login')).click()
                element(by.css('form')).submit())
            .then(() =>
                //element(by.css('form')).submit();
                element(by.buttonText('For host families')).click())
            .then(() =>
                element(by.id('find-sitter')).click())
            .then(() =>
                // Expect something
                //expect(element(by.css('form')).getAttribute('class')).toContain('ng-valid');
                expect(element(by.css("h1")).getText()).toEqual("Find your Sitter"))
    });



    /**************************************************************************/

    /*it("2: Should update an existing baby with valid data", async () => {
        browser.get('/find-family');
        // Do something
        element(by.id('username')).sendKeys('tj@admin.com')
            .then(() => element(by.id('password')).sendKeys('hello1J'))
            .then(() => element(by.id('login')).click())
            .then(() => element.all(by.css('.edit-baby')).get(0).click())
            // Expect something
            .then(() => expect(element(by.css("input[formControlName=firstname]")).getAttribute('value')).toContain("Oliver"))
    });*/

    /*it("3: Should delete an existing sitter with valid data", async () => {
        // Do something
        browser.get('/find-sitter');
        element(by.id('username')).sendKeys('tj@admin.com');
        element(by.id('password')).sendKeys('hello1J');
        element(by.id('login')).click();
        element.all(by.css('.delete-sitter')).click();
        element.all(by.css('.delete-confirm')).click();
        // Expect something
        expect(element(by.css("h2")).getText()).toEqual("Find your Sitter");
    });*/

});
