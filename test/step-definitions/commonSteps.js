import { After, Given } from '@wdio/cucumber-framework';
import Browser from '../../framework/browser/Browser.js';
import AllureReporter from '@wdio/allure-reporter';

const MAIN_PAGE_URL = 'https://store.steampowered.com/';

Given(/^I am on the '(.*)' page$/, async (page) => {
    AllureReporter.addStep('Open Main Page');
    await Browser.openUrl(MAIN_PAGE_URL);
});
