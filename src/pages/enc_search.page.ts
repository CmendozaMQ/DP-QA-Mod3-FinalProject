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
    constructor(){
        super();
    }

    async searchByName(text: string){
        await ElementActions.search(this.searchField, text);
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

export const enc_earch = new encuentralos_search();