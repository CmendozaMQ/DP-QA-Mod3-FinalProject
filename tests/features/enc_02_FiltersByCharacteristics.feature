@ui-tests 
#@api-tests
Feature: Encuentralos.org Filter by Characteristics
Background: open the web page and test the filters option by Characteristics

@test 
# @delete-project-api
Scenario: Filter a card item by characteristics 
    Given the user select the filter "Genero" selecting the value "Femenino"
    When the user select the filter "Contextura" selecting the value "Delgada"
    And the user select the filter "Estatura" selecting the value "Mediana"
    And the user select the filter "Forma de la cara" selecting the value "Alargada"
    And the user select the filter "Color de cabello" selecting the value "Negro"
    And the user select the filter "Contextura de cabello" selecting the value "Liso"
    And the user select the filter "Color de ojos" selecting the value "Negros"
    And the user select the filter "Forma de ojos" selecting the value "Pequeños"
    And the user select the filter "Forma de la Nariz" selecting the value "Perfilada"
    And the user select the filter "Forma de los Labios" selecting the value "Finos o reducidos"
    And the user select the filter "Color de los Dientes" selecting the value "Sin Información"
    And the user select the filter "Forma de los Dientes" selecting the value "Sin Información"
    # Then the user should see an item with the name filter in the page   
    Then the user should see an item with the name "Linzen" filter in the page

