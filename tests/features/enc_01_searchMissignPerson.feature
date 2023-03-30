@ui-tests 
#@api-tests
Feature: Encuentralos.org Search
Background: open the web page and test the search fields to find an item

@test 
# @delete-project-api
Scenario: Search an Card Item
    Given the user sets the value "Linzen" in the buscar field to search by name
    And the user select the estado de la persona as "todas"
    And the user select the time period "Más de 6 meses"
    And the user select the busqueda por departamento as "La Paz"
    Then the user should see an item with the name filter in the page   

