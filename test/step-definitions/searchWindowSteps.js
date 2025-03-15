import {  When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import SearchWindow from '../page-objects/SearchWindow.js';

Then (/^I can see that window with advanced options is displayed$/, async() => {
    assert.isTrue(await SearchWindow.isPageOpened(), 'Search window is not opened');
});

When(/^I select game '(.*)'$/, async(gameName) => {
    await SearchWindow.clickOnGameDropdown();
    await SearchWindow.clickOnGameItem(gameName);
});

When(/^I select hero '(.*)'$/, async(heroName) => {  
    await SearchWindow.selectHeroInDropdown(heroName);
});

When(/^I select rarity '(.*)'$/, async(rarityName) => {  
    await SearchWindow.selectRarityInDropdown(rarityName);
});

When(/^I click on 'Search'$/, async() => {
    await SearchWindow.clickOnSearchButton();
});
