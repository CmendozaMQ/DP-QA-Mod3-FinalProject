@ui-tests 
Feature: Encuentralos.org verify 'Historias' area
Background: Verify 'Historias' area and search a stories

@test 
Scenario: Verify the 'Historias' area and search a stories
    Given the user select the Historias option
    When the user search a story named "Te seguimos buscando hermana"
    And the user select the story found "Te seguimos buscando hermana"
    Then the user verify the story found "Te seguimos buscando hermana"