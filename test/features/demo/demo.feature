Feature: Demo Feature

    Feature Description

    @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When I search with <SearchItem>
        And I click on the first search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | DEMO_TC001 | WDIO       | https://webdriver.io/ |


