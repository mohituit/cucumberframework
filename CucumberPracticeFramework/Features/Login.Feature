Feature: Login
@sanity
Scenario: Success Login with valid Credentials
   Given User launches the Google Chrome browser.
   When User opens the URL "https://admin-demo.nopcommerce.com/login"
   And User enters Email as "admin@yourstore.com" and Password is "admin"
   And User clicks on Login button.
   Then Page title should be "Dashboard / nopCommerce administration" 
   When User clicks on the Logout button
   Then Page title should be "Your store. Login"
   And Close the Browser.
   @regression
   Scenario Outline: Success Login with valid Credentials
   Given User launches the Google Chrome browser.
   When User opens the URL "https://admin-demo.nopcommerce.com/login"
   And User enters Email as "<email>" and Password is "<password>"
   And User clicks on Login button.
   Then Page title should be "Dashboard / nopCommerce administration" 
   When User clicks on the Logout button
   Then Page title should be "Your store. Login"
   And Close the Browser.
   
   Examples: 
  |email|password|
  |admin@yourstore.com|admin|
  |admin@yourstore.com|admin1234|