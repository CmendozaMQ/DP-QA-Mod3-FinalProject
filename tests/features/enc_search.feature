@ui-tests 
#@api-tests
Feature: Encuentralos.org Search
Background: open the web page and test the search fields to find an item

@test 
# @delete-project-api
Scenario: Search an Card Item
    Given the user sets the value "Linzen" in the buscar field to search by name
    And the user select the estado de al persona as "todas"
    # And the user select the persona desaparecida as "todas"
    # And the user select the busqueda por departamento as "La Paz"
    Then Start to type your Then step here the user should see an item with the name filter in the page
    # Given the user click the nosotros option
    # Given the user click the historias option    

