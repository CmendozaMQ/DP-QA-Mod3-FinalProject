import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=2000;

class encuentralos_story extends BasePage {
    private story: string ='//span[normalize-space()="HISTORIAS"]'
    private storyField: string ='//input[@placeholder="Buscar..."]'
    // private searchField: string = '//input[@placeholder="Buscar.."]';
    // private personCardName : string ='//label[normalize-space()="Linzen lizeth Mariaca Colomo"]';     
    // private Name = (Name: string) => `//ul[@id="projects_list"]//span[text()="${Name}"]`;

    constructor(){
        super();
    }

    async storyOption(){        
        await ElementActions.click(this.story);
        await sleep(tie);
    }

    async storySearchName(StoryName: string){        
        await ElementActions.setText(this.storyField, StoryName);
        await ElementActions.pressEnter(this.storyField);
        await sleep(tie);
    }
}

export const enc_story = new encuentralos_story();