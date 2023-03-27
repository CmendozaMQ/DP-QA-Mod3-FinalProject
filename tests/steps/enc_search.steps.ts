import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { Context } from "../../cucumber.config";
// import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { enc_earch } from "../../src/pages/enc_search.page";

//import { expect } from 'chai';

setDefaultTimeout(60 * 1000);

Given('the user sets the value {string} in the buscar field to search by name', async function (this: Context, searchName: string) {
    this.scenarioContext['SEARCHNAME'] = searchName;
    await enc_earch.searchByName(searchName);
});

Given('the user click the nosotros option', async function () {
    await enc_earch.nosotrosOption();
});

Given('the user click the historias option', async function () {
    await enc_earch.historiasOption();
});


