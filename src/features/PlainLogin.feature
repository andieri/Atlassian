Feature: Atlassian - Login page - Plain login

  Scenario: The user logs into Atlassian with correct credentials
    Given I open up the Login page of Atlassian
    And I start the login process with my email
    When I log into Atlassian with my correct password
    Then I see the Atlassian dashboard

  Scenario: The user gets message about the incorrect login credetials during the login process
    Given I open up the Login page of Atlassian
    And I start the login process with my email
    When I log into Atlassian with my incorrect password
    Then I get an error message with "Helytelen e-mail-cím és/vagy jelszó."

  Scenario: The user is on the registration form with an unknown email in the login process
    Given I open up the login page of Atlassian
    When I start the login process with unknown email
    Then I see the regiter from of Atlassian