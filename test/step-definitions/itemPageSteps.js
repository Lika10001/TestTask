import { Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import ItemPage from '../page-objects/ItemPage.js';

Then(/^I can see that 'Item' page is opened$/, async() => {
    assert.isTrue(await ItemPage.isPageOpened(), "Item Page is not opened");
});

Then(/^Item info is correct for selected filters (.+)$/, async(tags) => {
    const tagsArray = tags.split(', ').map(tag => tag.trim().replace(/['"]/g, ''));
    assert.isTrue(await ItemPage.isItemInfoCorrect(tagsArray), "Item info is not correct");
});
