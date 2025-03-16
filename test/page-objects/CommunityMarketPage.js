import { Button, ElementsList, Label, Table } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class CommunityMarketPage extends BasePage {
    constructor() {
        super(new Label('//*[contains(@class,"market_header_logo")]', 'Community Market Page Unique Label'), 
            'Community Market Page');
        this.advancedOptionsButton = new Button('//*[@class="market_search_advanced_button"]', 
            'Advanced Options Button');
        this.resultTable = new Table('//*[@id="searchResultsRows"]', 'Result Table');
        this.resultTableElements = new ElementsList(Button, '//*[@id="searchResultsRows"]/a', 'Result Table');
        this.resultTablePrices = new ElementsList(Label, '//*[@class="normal_price"]', 'Result Table Prices');
        this.searchTagsList = new ElementsList(Label,'//*[@class="market_searchedForTerm"]', 'Search Tags List');
        this.priceFilterButton = new Button('//*[contains(@class,"market_listing_their_price") and @data-sorttype="price"]',
            'Price Filter Button');
        this.filterIcon = new Label('//*[contains(@class,"market_listing_their_price") and @data-sorttype="price"]/span',
            'Filter Icon Label'
        );
    }

    async clickOnAdvancedOptionsButton() {
        return this.advancedOptionsButton.click();
    }

    async isResultTableDisplayed() {
        return this.resultTable.state().waitForDisplayed();
    }

    async #isTagDisplayed(tagName) {
        const tagElements = await this.searchTagsList.getListOfElements();
        const tagTexts = await Promise.all(tagElements.map(async el => await el.getText())); 
        return tagTexts.includes(tagName);
    }
    
    async AreAllTagsDisplayed(tags) {
        const results = await Promise.all(tags.map(tag => this.#isTagDisplayed(tag)));
        return results.every(isDisplayed => isDisplayed);
    }

    async clickOnResultTableItem(number) {
        const rows = await this.resultTableElements.getListOfElements();
        return rows[number - 1].click();
    }

    async getFilterIconText() {
        return this.filterIcon.getText();
    }

    async clickOnPriceFilterButton() {
        return this.priceFilterButton.click();       
    }

    async isPriceSortedCorrectly(orderName) {      
        await this.resultTablePrices.waitForListToUpdate(); 
        const priceElements = await this.resultTablePrices.getListOfElements();
    
        const prices = [];
        for (const el of priceElements) {
            const text = await el.getText();
            prices.push(parseFloat(text.replace(/[$,]/g, '')));
        }
        if (orderName == 'ascending') {
            return prices.every((price, index) => index === 0 || price >= prices[index - 1]);
        } else if (orderName == 'descending') {
            return prices.every((price, index) => index === 0 || price <= prices[index - 1]);
        } else {
            throw new Error(`Unknown order name: ${orderName}`);
        }
    }
}

export default new CommunityMarketPage();
