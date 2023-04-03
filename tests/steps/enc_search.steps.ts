import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { Context } from "../../cucumber.config";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { enc_search } from "../../src/pages/enc_search.page";
import { enc_content } from "../../src/pages/enc_content.page";

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

Then('the user should see an item with the name {string} filter in the page', async function (this: Context, searchName: string) {
    this.scenarioContext['SEARCHNAME'] = searchName;
    const personCardName = await enc_content.validateName();
    console.log('personCardName:'+ personCardName);
    // console.log('searchName:'+ searchName);
    const temp = expect(personCardName).includes(searchName);
    console.log('tempData:'+ JSON.stringify(temp));
    expect(personCardName).includes(searchName);
});

//FILTER by characteristics

When('the user select the filter {string} selecting the value {string}', async function (this: Context, filterName: string, filterOption: string) {
    this.scenarioContext['FILTERNAME'] = filterName;
    this.scenarioContext['FILTEROPTION'] = filterOption;
    await enc_search.FilterByOption(filterName, filterOption);
});




