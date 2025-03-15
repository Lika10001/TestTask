import { Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class ItemPage extends BasePage {
    constructor(){
        super(new Label('//*[@id="largeiteminfo_item_name"]', 'Item Page Unique Label'), 'Item Page');
        this.gameNameLabel = new Label('//*[@id="largeiteminfo_game_name"]', 'Game Name Label');
        this.itemRarityLabel = new Label('//*[@id="largeiteminfo_item_type"]', 'Item Rarity Label');
        this.heroLabel = new Label('//*[@class="descriptor" and contains(text(),"Used By:")]', 'Hero Label');
    }

    async isTextInElementCorrect(element, expectedText) {
        const text = await element.getText();
        return text.includes(expectedText);
    }

    async isItemInfoCorrect(tags) {
        return this.isTextInElementCorrect(this.gameNameLabel, tags[0]) &&
            this.isTextInElementCorrect(this.heroLabel, tags[1]) &&
            this.isTextInElementCorrect(this.itemRarityLabel, tags[2]);
    }
}

export default new ItemPage();
