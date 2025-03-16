import BasePage from "../../framework/page/BasePage.js";
import { Label, Button, Dropdown } from "../../framework/elements/index.js";

class SearchWindow extends BasePage { 
    constructor() {     
        super(new Label('//*[contains(text(),"Search Community Market")]','Search Window Title'), 'Search Window');
        this.gamesDropdown = new Button('//*[@id="app_option_0_selected"]/span', 'Games Dropdown');
        this.gameItem = (gameName) => new Button(
            `//*[@id="market_advancedsearch_appselect_options_apps"]//*[contains(text(),'${gameName}')]`, 'Game Item');
        this.heroDropdown = new Dropdown('//select[contains(@name,"Hero")]', 'Hero Dropdown');
        this.rarityItem = (rarityName) => new Button(
            `//*[@class="econ_tag_filter_label"]/*[contains(text(),'${rarityName}')]`, 'Rarity Item');
        this.searchButton = new Button('//*[contains(@onclick,"submit")]/*[contains(text(),"Search")]', 'Search Button');
    }

    async clickOnGameDropdown() {
        return this.gamesDropdown.click();
    }

    async clickOnGameItem(item) {
        return this.gameItem(item).click();
    }

    async selectHeroInDropdown(heroName) {
        await this.heroDropdown.state().waitForDisplayed();
        return this.heroDropdown.selectOptionByText(heroName);
    }
    
    async selectRarityInDropdown(rarityName) {
        return this.rarityItem(rarityName).click();
    }
    async clickOnSearchButton() {
        return this.searchButton.click();
    }
}

export default new SearchWindow();
