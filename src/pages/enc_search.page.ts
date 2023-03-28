import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=2000;

class encuentralos_search extends BasePage {
    private searchField: string = '//input[@placeholder="Buscar.."]';   
    private nosotros: string ='//span[normalize-space()="NOSOTROS"]';
    private historias: string ='//span[normalize-space()="HISTORIAS"]';
    private statusField: string = '//button[@name="Seleccionar Estado"]'
    
    constructor(){
        super();
    }

    async searchByName(text: string){
        await ElementActions.search(this.searchField, text);
        await sleep(tie);
    }

    async searchByStatus(searchStatus: string){
        // const dropdownButton = await Page.$(locatorField);
        // // searchStatus = `//button[@class='dropdown-item'][normalize-space()='${searchStatus}']`;
        // // searchStatus = `//button[normalize-space()='${searchStatus}']`;
        // await ElementActions.selectStatus(this.statusField, searchStatus);
        // // await ElementActions.click(this.statusField);
        // // await ElementActions.click(searchStatus);
        // await sleep(tie);
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