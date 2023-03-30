import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=0;

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
        await ElementActions.search(this.searchField, text);
        await sleep(tie);
    }

    async searchByStatus(text: string){
        await ElementActions.selectStatus(this.statusField, text);
        await sleep(tie);
    }

    async searchByPeriod(text: string){
        await ElementActions.selectPeriod(this.periodField, text);
        await sleep(tie);
    }

    async searchByDepartment(text: string){
        await ElementActions.selectDepartment(this.departmentField, text);
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
        await ElementActions.Filter(textFilter, textOption);
        await sleep(tie);
    }

    async FilterByOptionContexture(textFilter: string, textOption: string){
        await ElementActions.FilterContexture(textFilter, textOption);
        await sleep(tie);
    }

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