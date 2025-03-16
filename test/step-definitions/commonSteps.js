import { Given } from '@wdio/cucumber-framework';
import Browser from '../../framework/browser/Browser.js';

const MAIN_PAGE_URL = 'https://store.steampowered.com/';

Given(/^I am on the '(.*)' page$/, async (page) => {
    return Browser.openUrl(MAIN_PAGE_URL);
});
