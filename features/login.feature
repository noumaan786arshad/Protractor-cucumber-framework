Feature: Test Login functionality

    Scenario: Login to the application
        Given I have navigated to the website
        When I enter usename and password and email
        And I click "Login" button
        Then I should be successfully logged in