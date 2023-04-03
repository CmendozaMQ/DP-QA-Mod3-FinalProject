import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=0;

class encuentralos_content extends BasePage {
    private  contentCards: string ='(//div[@class="row"])[4]';    
    // private searchField: string = '//input[@placeholder="Buscar.."]';  
    // private Name = (Name: string) => `//ul[@id="projects_list"]//span[text()="${Name}"]`;

    constructor(){
        super();
    }

    async validateName(){                
        const personCardName = await ElementActions.getElementText(this.contentCards);
        console.log(personCardName);
        return personCardName;
    }
}

export const enc_content = new encuentralos_content();