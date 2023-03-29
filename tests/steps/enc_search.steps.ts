import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { Context } from "../../cucumber.config";
// import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { enc_search } from "../../src/pages/enc_search.page";
import { enc_content } from "../../src/pages/enc_content.page";

//import { expect } from 'chai';

setDefaultTimeout(60 * 1000);

Given('the user sets the value {string} in the buscar field to search by name', async function (this: Context, searchName: string) {
    this.scenarioContext['SEARCHNAME'] = searchName;
    await enc_search.searchByName(searchName);
});

When('the user select the estado de la persona as {string}', async function (this: Context, searchStatus: string) {
    this.scenarioContext['SEARCHSTATUS'] = searchStatus;
    await enc_search.searchByStatus(searchStatus);
});

When('the user select the time period {string}', async function (this: Context, searchTimePeriod: string) {
    this.scenarioContext['SEARCHTIMEPERIOD'] = searchTimePeriod;
    await enc_search.searchByPeriod(searchTimePeriod);
});
When('the user select the busqueda por departamento as {string}', async function (this: Context, searchDepartment: string) {
    this.scenarioContext['SEARCHDEPARTMENT'] = searchDepartment;
    await enc_search.searchByDepartment(searchDepartment);
});

Then('the user should see an item with the name filter in the page', async function () {
    await enc_content.validateName();
});

Given('the user click the nosotros option', async function () {
    await enc_search.nosotrosOption();
});

Given('the user click the historias option', async function () {
    await enc_search.historiasOption();
});




