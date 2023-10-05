import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
     * To Enter field value
     * @param {*} element 
     * @param {*} data data value
     * @author Sanjay Rathore
     */
    async setFieldValue (element, data) {
        await (await element).waitForDisplayed();
        await (await element).scrollIntoView();
        await (await element).click();
        try {
            await (await element).setValue(data);
            console.log("Entered field value :"+data);
        }
        catch(err) {
            console.log(err);
        }
    }

    async clickElement(element) {
        await (await element).waitForClickable();
        await (await element).click();
        console.log("Clicked on Element");
    }
}
