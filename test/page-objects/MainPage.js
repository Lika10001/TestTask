import { Button, Label } from '../../framework/elements/index.js';
import BasePage from '../../framework/page/BasePage.js';

class MainPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="home_video_desktop"]', 'Main Page Unique Element'), 'Main Page');
        this.communityButton = new Label('//*[contains(text(),"COMMUNITY")]', 'Community Button');
        this.marketButton = new Button('//*[@class="submenu_Community" and @style=""]/*[contains(text(),"Market")]',
            'Market Button');
    }

    async hoverOnCommunityButton() {
        return this.communityButton.moveTo();
    }

    async clickOnMarketButton() {
        return this.marketButton.click();
    }

}

export default new MainPage();
