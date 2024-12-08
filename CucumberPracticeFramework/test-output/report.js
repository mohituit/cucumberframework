$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3271575894,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Success Login with valid Credentials",
  "description": "",
  "id": "login;success-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User launches the Google Chrome browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens the URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password is \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button.",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the Logout button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser.",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.user_launches_the_Google_Chrome_browser()"
});
formatter.result({
  "duration": 146543360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 20
    }
  ],
  "location": "loginSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 4228293120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "loginSteps.user_enters_Email_as_and_Password_is(String,String)"
});
formatter.result({
  "duration": 379414614,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 14180022186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "loginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 79725653,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_clicks_on_the_Logout_button()"
});
formatter.result({
  "duration": 5065511253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "loginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 23053654,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.close_the_Browser()"
});
formatter.result({
  "duration": 1194652160,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Success Login with valid Credentials",
  "description": "",
  "id": "login;success-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User launches the Google Chrome browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User opens the URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password is \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Login button.",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the Logout button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the Browser.",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login;success-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 24,
      "id": "login;success-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 25,
      "id": "login;success-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin1234"
      ],
      "line": 26,
      "id": "login;success-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2302544640,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Success Login with valid Credentials",
  "description": "",
  "id": "login;success-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User launches the Google Chrome browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User opens the URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters Email as \"admin@yourstore.com\" and Password is \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Login button.",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the Logout button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the Browser.",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.user_launches_the_Google_Chrome_browser()"
});
formatter.result({
  "duration": 1141334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 20
    }
  ],
  "location": "loginSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 3646171733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "loginSteps.user_enters_Email_as_and_Password_is(String,String)"
});
formatter.result({
  "duration": 380801706,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 9597455360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "loginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 55174826,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_clicks_on_the_Logout_button()"
});
formatter.result({
  "duration": 5008144640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "loginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 19170560,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.close_the_Browser()"
});
formatter.result({
  "duration": 1435080533,
  "status": "passed"
});
formatter.before({
  "duration": 2141919574,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Success Login with valid Credentials",
  "description": "",
  "id": "login;success-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User launches the Google Chrome browser.",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User opens the URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters Email as \"admin@yourstore.com\" and Password is \"admin1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Login button.",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the Logout button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the Browser.",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.user_launches_the_Google_Chrome_browser()"
});
formatter.result({
  "duration": 935680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 20
    }
  ],
  "location": "loginSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 3723330986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin1234",
      "offset": 60
    }
  ],
  "location": "loginSteps.user_enters_Email_as_and_Password_is(String,String)"
});
formatter.result({
  "duration": 430841600,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 5663638187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "loginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 2109218987,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.loginSteps.page_title_should_be(loginSteps.java:96)\r\n\tat ✽.Then Page title should be \"Dashboard / nopCommerce administration\"(./Features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.user_clicks_on_the_Logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "loginSteps.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginSteps.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
});