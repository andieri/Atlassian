Feature: Atlassian - Login page - External Authentication Provider - Google

     Scenario: The user logs into Atlassian with correct credentials through Google Authentication
       Given I open the Login page of Atlassian
       And I start the login process with my Google account
       When I log into Google with my correct Google password
       Then I see the Atlassian dashboard
