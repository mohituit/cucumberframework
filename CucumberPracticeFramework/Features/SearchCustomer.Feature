Feature: Search Customer

Background: This is the background for login in the application 
Given User launches the Google Chrome browser.
   When User opens the URL "https://admin-demo.nopcommerce.com/login"
   And User enters Email as "admin@yourstore.com" and Password is "admin"
   And User clicks on Login button.
   Then user can view the Dashboard page.
 @regression  
Scenario: Search customer with email
   When user clicks on the Customers menu
   And user click on the customer sub menu.
   And user enter the customer Email.
   When user clicks on the Search button
   Then user should found the email in the search table
    And Close the Browser.
  @sanity
Scenario: Search customer with Name
   When user clicks on the Customers menu
   And user click on the customer sub menu.
   And user enter the customer name.
   When user clicks on the Search button
   Then user should found the email in the search table
    And Close the Browser.    