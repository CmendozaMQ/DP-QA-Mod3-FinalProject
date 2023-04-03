import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=500;

class encuentralos_story extends BasePage {
    private story: string ='//span[normalize-space()="HISTORIAS"]'
    private storyField: string ='//input[@placeholder="Buscar..."]'
    private titleStory: string = `//div[@class='col-lg-12 col-md-12 col-12']//h5[@id='exampleModalCenterTitle']`;
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

    async storyfound(storyfound: string){        
        storyfound = `//h3[normalize-space()='${storyfound}']`
        await ElementActions.click(storyfound);
        await sleep(tie);
    }

    async verifyStoryfound(){                
        const storyText = await ElementActions.getElementText(this.titleStory);
        console.log(storyText);
        await sleep(tie);              
        return storyText;

    }
}

export const enc_story = new encuentralos_story();