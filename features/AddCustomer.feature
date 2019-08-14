Feature: Test Bank Managers ability to add new customers functionality

    Scenario Outline:  Add New customers
  Given I click on "Bank Manager Login" button
    And I click "Add Customer" button from the bank application
        # When I enter customer details and submit the application
   When I enter customer details such as "<firstName>" "<LastName>" and "<postcode>" and submit the application
   Then the customer should be successfully added with "<customer_id>"
    And I click on "Home" button

        Examples:
|firstName|LastName|postcode|customer_id|
|  Nouman |  Syed  |  3122  |     6     |
| Juveria | fatima |  3122  |     7     |
        