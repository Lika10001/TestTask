import { When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import CommunityMarketPage from '../page-objects/CommunityMarketPage.js';

Then(/^I can see that 'Community Market' page is opened$/, async() => {
    assert.isTrue(await CommunityMarketPage.isPageOpened(), 'Cummunity Market Page is not opened');
});

When(/^I click on 'Show advanced options'$/, async() => {
    await CommunityMarketPage.clickOnAdvancedOptionsButton();
});

Then(/^I can see that Table with results is loaded$/, async() => {
    assert.isTrue(await CommunityMarketPage.isResultTableDisplayed(), "Result Table is not displayed");
});

Then(/^I can see that correct tags in "Showing results for" are displayed$/, async() => {
    assert.isTrue(await CommunityMarketPage.isResultTableDisplayed(), "Result Table is not displayed");
});

Then(/^I can see that tags (.+) in 'Showing results for' are displayed$/, async(tagsString) => {
    const tags = tagsString.split(', ').map(tag => tag.trim().replace(/['"]/g, ''));
    assert.isTrue(await CommunityMarketPage.AreAllTagsDisplayed(tags), "Tags are not displayed");
});

When(/^I click first item$/, async() => {
    const itemNumber = 1;
    await CommunityMarketPage.clickOnResultTableItem(itemNumber);
});

When(/^I sort price by ascending order$/, async() => {
    await CommunityMarketPage.clickOnPriceFilterButton();
});

When(/^I sort price by descending order$/, async() => {
    await CommunityMarketPage.clickOnPriceFilterButton();
});

Then(/^I can see that prices are sorted in (.*) order$/, async(orderName) => {
    assert.isTrue(await CommunityMarketPage.isPriceSortedCorrectly(orderName), "Prices are not sorted in correct order");
});
