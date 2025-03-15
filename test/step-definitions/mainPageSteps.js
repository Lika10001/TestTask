import { When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import MainPage from '../page-objects/MainPage.js';

Then(/^I can see that 'Main' page is opened$/, async() => {
    assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not opened');
});

When(/^I navigate to 'Community Market'$/, async() => {
    await MainPage.hoverOnCommunityButton();
    await MainPage.clickOnMarketButton();
});
