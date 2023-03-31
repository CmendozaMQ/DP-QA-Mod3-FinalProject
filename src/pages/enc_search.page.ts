import { driverInstance } from "../core/driver";
import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=1000;

class encuentralos_search extends BasePage {
    private searchField: string = '//input[@placeholder="Buscar.."]';   
    private nosotros: string ='//span[normalize-space()="NOSOTROS"]';
    private historias: string ='//span[normalize-space()="HISTORIAS"]';
    // private statusField: string = '//button[@name="Seleccionar Estado"]';
    private statusField: string = 'Desaparecidas';
    private periodField: string = 'Seleccionar Periodo';
    private departmentField: string = 'Seleccionar Departamento';
    
    constructor(){
        super();
    }

    async searchByName(text: string){
        console.log(text)
        await driverInstance.Page.waitForSelector(this.searchField);
        await driverInstance.Page.fill(this.searchField, text);
        await driverInstance.Page.press(this.searchField, 'Enter');
        await sleep(tie);
    }

    async searchByStatus(text: string){
        console.log(this.statusField);       
        console.log(text);
        await driverInstance.Page.getByRole('button', { name: this.statusField }).click();
        await driverInstance.Page.getByRole('button', { name: text }).click();
        await sleep(tie);
    }

    async searchByPeriod(text: string){
        console.log(this.periodField);       
        console.log(text);
        await driverInstance.Page.locator(`button[name="${this.periodField}"]`).click();
        await driverInstance.Page.getByRole('button', { name: text }).click();
        // await ElementActions.selectPeriod(this.periodField, text);
        await sleep(tie);
    }

    async searchByDepartment(text: string){
        console.log(this.departmentField);       
        console.log(text);
        await driverInstance.Page.locator(`button[name="${this.departmentField}"]`).click();
        await driverInstance.Page.getByRole('button', { name: text }).click();
        // await ElementActions.selectDepartment(this.departmentField, text);
        await sleep(tie);
    }

    async nosotrosOption(){
        console.log(this.nosotros)
        await ElementActions.click(this.nosotros);
        await sleep(tie);
    }

    async historiasOption(){
        console.log(this.historias)
        await ElementActions.click(this.historias);
        await sleep(tie);
    }
    //Filters options  FilterByOption
    async FilterByOption(textFilter: string, textOption: string){
        console.log(textFilter);       
        console.log(textOption);
        if(textFilter == "Contextura"){
            await driverInstance.Page.getByRole('button', { name: textFilter, exact: true }).click();
        }
        else{
            await driverInstance.Page.getByRole('button', { name: textFilter }).click();
        }        
        await driverInstance.Page.getByRole('button', { name: textOption }).click();
        await sleep(tie);
    }

    // async FilterByOptionContexture(textFilter: string, textOption: string){
    //     await ElementActions.FilterContexture(textFilter, textOption);
    //     await sleep(tie);
    // }

    //end filters options

    // async setEmail(text: string) {        
    //     await ElementActions.setText(this.email, text);
    // }

    // async setPassword(text: string) {        
    //     await ElementActions.setText(this.password, text);
    // }

    // async clickLogin() {
    //     await ElementActions.click(this.loginButton);
    // }

    // async login(emailInput: string, passwordInput: string) {
    //     await ElementActions.setText(this.email, emailInput);
    //     await ElementActions.setText(this.password, passwordInput);
    //     await ElementActions.click(this.loginButton);
    // }
}

export const enc_search = new encuentralos_search();