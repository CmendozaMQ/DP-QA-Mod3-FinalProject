import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
const tie=500;

class AddProject extends BasePage {
    private nameTextField: string = '#edit_project_modal_field_name';
    private addButton: string = '//span[text()="Add"]//parent::button';
    private cancelButton: string = '//span[text()="Cancel"]//parent::button';          

    // Extra Points add select the following behavior
    private colorButtonDropdown: string = "//button[@class='color_dropdown_toggle form_field_control']"; 
    //private favoritesToggle: string = '.reactist_switch';
    //private optionListView: string = '//div[normalize-space()="List"]';
    //private optionBoardView: string = '//div[normalize-space()="Board"]';

    constructor(){
        super();
    }

    async setProjectName(projectName: string) {
        await ElementActions.setText(this.nameTextField, projectName);
    }

    async ClickDropdownSelectColor(projectColor: string) {     
        projectColor = `//span[normalize-space()='${projectColor}']`;
        console.log(projectColor);
        // await sleep(tie);      
        await ElementActions.setColor(this.colorButtonDropdown, projectColor);   
    } 
    
    async ClickTextOption(textNameOption: string){        
        textNameOption = `//div[normalize-space()="${textNameOption}"]`;  
        console.log(textNameOption);
        await ElementActions.ClickText(textNameOption);
    }

    async clickAdd() {
        await sleep(500);
        await ElementActions.click(this.addButton);
    }

    async clickRemove() {
        await ElementActions.click(this.addButton);
    }

    async createNewProject(projectName: string, color: string, isFavorite: boolean, view: string) {
        // Add Code
    }
}

export const addProjectPane = new AddProject();