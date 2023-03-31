import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { Context } from "../../cucumber.config";
// import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { enc_story } from "../../src/pages/enc_story.page";

//import { expect } from 'chai';

setDefaultTimeout(60 * 1000);

Given('the user select the Historias option', async function () {
    await enc_story.storyOption();
});

When('the user search a story named {string}', async function (this: Context, nameStory: string) {
    this.scenarioContext['NAMESTORY'] = nameStory;
    await enc_story.storySearchName(nameStory);
});



