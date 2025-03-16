import { Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class ItemPage extends BasePage {
    constructor(){
        super(new Label('//*[@id="largeiteminfo_item_name"]', 'Item Page Unique Label'), 'Item Page');
        this.gameNameLabel = new Label('//*[@id="largeiteminfo_game_name"]', 'Game Name Label');
        this.itemRarityLabel = new Label('//*[@id="largeiteminfo_item_type"]', 'Item Rarity Label');
        this.heroLabel = new Label('//*[@class="descriptor" and contains(text(),"Used By:")]', 'Hero Label');
    }

    async #isTextInElementCorrect(element, expectedText) {
        const text = await element.getText();
        return text.includes(expectedText);
    }

    async isItemInfoCorrect(tags) {
        const elementsList = [this.gameNameLabel,  this.heroLabel, this.itemRarityLabel];
        for (let i = 0; i < tags.length; i++) {
            const isCorrect = await this.#isTextInElementCorrect(elementsList[i], tags[i]);
            if (!isCorrect) return false;
        }
        return true;
    }
}

export default new ItemPage();
