Feature: Steam Scenarios

Scenario: As a user, I can open searched item page with info
    Given I am on the 'Main' page
    Then I can see that 'Main' page is opened
    When I navigate to 'Community Market'
    Then I can see that 'Community Market' page is opened
    When I click on 'Show advanced options'
    Then I can see that window with advanced options is displayed
    When I select game 'Dota 2'
    And I select hero 'Phantom Assassin'
    And I select rarity 'Rare'
    And I click on 'Search' 
    Then I can see that Table with results is loaded
    And I can see that tags 'Dota 2', 'Phantom Assassin', 'Rare' in 'Showing results for' are displayed
    When I click first item
    Then I can see that 'Item' page is opened
    And Item info is correct for selected filters 'Dota 2', 'Phantom Assassin', 'Rare'

Scenario: As a user, I can sort searched items by price
    Given I am on the 'Main' page
    Then I can see that 'Main' page is opened
    When I navigate to 'Community Market'
    Then I can see that 'Community Market' page is opened
    When I click on 'Show advanced options'
    Then I can see that window with advanced options is displayed
    When I select game 'Dota 2'
    And I select hero 'Anti-Mage'
    And I select rarity 'Uncommon'
    And I click on 'Search'
    Then I can see that Table with results is loaded
    And I can see that tags 'Dota 2', 'Anti-Mage', 'Uncommon' in 'Showing results for' are displayed
    When I sort price by ascending order
    Then I can see that prices are sorted in ascending order
    When I sort price by descending order
    Then I can see that prices are sorted in descending order
