import { LabelName } from "allure-js-commons";
import { driverInstance } from "./driver";

export class ElementActions {

    static async search(locator: string, text: string): Promise<void> {
        console.log(locator)
        await driverInstance.Page.waitForSelector(locator);
        // await driverInstance.Page.click(locator);
        await driverInstance.Page.fill(locator, text);
        await driverInstance.Page.press(locator, 'Enter');
    }

    static async selectStatus(locatorField: string, locatorStatus: string): Promise<void> {        
        // // await driverInstance.Page.click(locatorField);
        // // await driverInstance.Page.click(locatorStatus);
        // const dropdownButton = await driverInstance.Page.$(locatorField);
        // await driverInstance.Page.dropdownButton.click();
        // await dropdown.selectOption(locatorField, LabelName: locatorStatus)
        // console.log(locatorField);
        // console.log(locatorStatus);
    }

    static async click(locator: string) {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.click(locator);
    }

    static async setText(locator: string, text: string): Promise<void> {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.fill(locator, text);
    }

    static async ClickText(locator: string) {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.click(locator);
    }
    

    static async setColor(locator: string, text: string): Promise<void> {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.click(locator);
        await driverInstance.Page.click(text);
    }

    static async isElementVisible(locator: string): Promise<boolean> {
        await driverInstance.Page.waitForSelector(locator);
        return await driverInstance.Page.isVisible(locator, {
            timeout: 10000
        });
    }

    static async getElementText(locator: string): Promise<string> {
        await driverInstance.Page.waitForSelector(locator);
        return await driverInstance.Page.innerText(locator);
    }
}
