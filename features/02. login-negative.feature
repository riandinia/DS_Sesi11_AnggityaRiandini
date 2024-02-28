@LoginFeature
Feature: Login - Negative - Swag Labs website

  @LoginNegativeTC1
  Scenario: As a user, I should get error message
    Given I am on the Login page
    When I login with "locked_out_user" credential
    Then I should see error of "Epic sadface: Sorry, this user has been locked out."