Feature: Star Wars APIs

  In order to check the Star Wars APIs
  As a persona
  I want to be able to get the informations of People and Planets

@people
  Scenario: Validate correct return of the star wars /people endpoint
    Given i set the base url
    When i send a get request to the endpoint of people
    Then the api return the status code 200
    And the correct data of the people
    
@planets
  Scenario: Validate correct return of the star wars /planets endpoint
    Given i set the base url
    When i send a get request to the endpoint of planets
    Then the api return the status code 200
    And the correct data of the planets
