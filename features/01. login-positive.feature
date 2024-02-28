@LoginFeature
Feature: Login - Positive - Swag Labs website

  @LoginPositiveTC1
  Scenario Outline: As a user, I can log into the Swag Labs website successfully
    Given I am on the Login page
    When I login with "standard_user" credential
    Then I should see the Home page