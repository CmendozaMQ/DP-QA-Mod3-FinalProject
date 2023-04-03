import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { Context } from "../../cucumber.config";
import { expect } from "chai";
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

When('the user select the story found {string}', async function (this: Context, nameStory: string) {
    this.scenarioContext['NAMESTORY'] = nameStory;
    await enc_story.storyfound(nameStory);
});

Then('the user verify the story found {string}', async function (this: Context, nameStory: string) {
    this.scenarioContext['NAMESTORY'] = nameStory;
    const elementText = await enc_story.verifyStoryfound();
    console.log(elementText);
    // expect(elementText).true;
    expect(elementText).equal(nameStory);
});
