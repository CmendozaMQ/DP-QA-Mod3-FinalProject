import { LabelName } from "allure-js-commons";
import { driverInstance } from "./driver";

export class ElementActions {

    // static async search(locator: string, text: string): Promise<void> {
    //     console.log(locator)
    //     await driverInstance.Page.waitForSelector(locator);
    //     // await driverInstance.Page.click(locator);
    //     await driverInstance.Page.fill(locator, text);
    //     await driverInstance.Page.press(locator, 'Enter');
    // }

    // static async selectStatus(locatorField: string, locatorStatus: string): Promise<void> {        
    //     console.log(locatorField);       
    //     console.log(locatorStatus);
    //     await driverInstance.Page.getByRole('button', { name: locatorField }).click();
    //     await driverInstance.Page.getByRole('button', { name: locatorStatus }).click();
    // }

    // static async selectPeriod(locatorField: string, locatorStatus: string): Promise<void> {        
    //     console.log(locatorField);       
    //     console.log(locatorStatus);
    //     await driverInstance.Page.locator(`button[name="${locatorField}"]`).click();
    //     await driverInstance.Page.getByRole('button', { name: locatorStatus }).click();
    // }

    // static async selectDepartment(locatorField: string, locatorStatus: string): Promise<void> {        
    //     console.log(locatorField);       
    //     console.log(locatorStatus);
    //     await driverInstance.Page.locator(`button[name="${locatorField}"]`).click();
    //     await driverInstance.Page.getByRole('button', { name: locatorStatus }).click();
    // }
    //filters options    await page.getByRole('button', { name: 'Genero' }).click();
    // //                   await page.getByRole('button', { name: 'Femenino' }).click();
    // static async Filter(locatorFilter: string, locatorOption: string): Promise<void> {        
    //     console.log(locatorFilter);       
    //     console.log(locatorOption);
    //     await driverInstance.Page.getByRole('button', { name: locatorFilter }).click();
    //     await driverInstance.Page.getByRole('button', { name: locatorOption }).click();
    // }

    // await page.getByRole('button', { name: 'Contextura', exact: true }).click();
    // static async FilterContexture(locatorFilter: string, locatorOption: string): Promise<void> {        
    //     console.log(locatorFilter);       
    //     console.log(locatorOption);
    //     await driverInstance.Page.getByRole('button', { name: locatorFilter, exact: true }).click();
    //     await driverInstance.Page.getByRole('button', { name: locatorOption }).click();
    // }
    //filters options

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

    static async pressEnter(locator: string): Promise<void> {
        await driverInstance.Page.press(locator, 'Enter');
    }
}
