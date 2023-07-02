Feature: Specify Number Of Events
    Scenario: When user hasn't specified a number, 32 is the default number
        Given that the user has opened the events page
        When the user has not specified the number of events to be displayed
        Then the default number of events displayed should be 32

    Scenario: User can change the number of events they want to see
        Given that the user has opened the events page
        When the user selects the option to change the number of events displayed
        Then the page should update to display the selected number of events
        And the user should be able to see the selected number of events on the page
