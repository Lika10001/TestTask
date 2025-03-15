import Logger from '../utils/Logger.js';

export class ElementsList {
    constructor(elementType, locator, name) {
        this.elementType = elementType;
        this.locator = locator;
        this.name = name;
    }

    /**
     * Get list of elements
     * @returns {Promise<array>} Array of elements
     */
    async getListOfElements() {
        Logger.info(`Get all elements "${this.name}"`);

        const listOfElements = await $$(this.locator);
        Logger.info(`Found '${listOfElements.length}' elements`);

        const elements = [];
        for (const [index, el] of listOfElements.entries()) {
            const element = new this.elementType(el, `${this.name} #${index}`);
            elements.push(element);
        }
        return elements;
    }

    async waitForListToUpdate() {
        const elements = await this.getListOfElements();
        if (elements.length === 0) {
            throw new Error("No elements found in the list.");
        }
    
        const firstElement = elements[0];  
        const oldText = await firstElement.getText();
    
        await browser.waitUntil(async () => {
            const updatedElements = await this.getListOfElements();
            const newText = await updatedElements[0].getText();
            return newText !== oldText;
        }, {
            timeout: 5000,
            timeoutMsg: "List content did not update within 5 seconds"
        });
    }

}
