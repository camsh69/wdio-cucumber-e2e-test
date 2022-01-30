import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function() {
    browser.url("https://www.google.com");
    await browser.pause(7000);
});

When(/^I search with (.*)$/, async function(searchItem) {
    console.log(`>> serchItem: ${searchItem}`);
    let ele = await $(`[name=q]`);
    await ele.setValue(searchItem);
    browser.keys("Enter");
});

When(/^I click on the first search result$/, async function() {
    let ele = await $(`<h3>`);
    ele.click();
});

Then(/^URL should match (.*)$/, async function(expectedURL) {
    console.log(`>> expectedURL: ${expectedURL}`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL);
});