@ui-tests 
#@api-tests
Feature: Encuentralos.org Search
Background: open the web page and test the search fields to find an item

@test 
# @delete-project-api
Scenario: Search a item
    Given the user sets the value "Linzen" in the buscar field to search by name
    Given the user click the nosotros option
    Given the user click the historias option    
    # And the user clicks the Add Project Icon on the Vertical Menu
    # And the user sets "QADB123" as Project Name on the Add Project popup
    # And the user select the "Red" color
    # And the user select the "Add to favorites" Toggle
    # And the user select the "List" view option
    # And the user select the "Board" view option
    # When the user clicks the Add Button on the Add Project popup
    # Then the user should see the New Project on the Vertical Menu
