import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=0;

class encuentralos_content extends BasePage {
    private searchField: string = '//input[@placeholder="Buscar.."]';  
    private personCardName : string ='//label[normalize-space()="Linzen lizeth Mariaca Colomo"]';     
    // private Name = (Name: string) => `//ul[@id="projects_list"]//span[text()="${Name}"]`;

    constructor(){
        super();
    }

    async validateName(){        
        await ElementActions.isElementVisible(this.personCardName);
        console.log(this.personCardName);
    }
}

export const enc_content = new encuentralos_content();