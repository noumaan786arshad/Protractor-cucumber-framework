Feature: I want to verify amny customers by logging in  with different users to verify transactions

   Scenario Outline:Verify customers can login and deposit money into their accounts
  Given I click on "Customer Login" button
    And I shouldnt see the login button initially untill I select the customer from dropdown list
   When I select the customer "<CustomerName>" from customer dropdown list
   Then login button should be displayed
   When  I click on login button
   Then user should see welcome message against his name "<CustomerName>" with transactions, withdraw and deposit options
    And I click on "Home" button

   Examples:
|CustomerName|
| Ron Weasly |
|Harry Potter|

