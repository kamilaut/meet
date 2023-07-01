Feature: Show/Hide an Event Details

    Scenario: An event element is collapsed by default
        Given that the user has opened the events page
        When the page loads
        Then the event element should be collapsed by default

    Scenario: User can expand an event to see its details
        Given that the user has opened the events page and the event element is collapsed
        When the user clicks on the event element
        Then the event element should expand to show its details

    Scenario: User can collapse an event to hide its details
        Given that the user has opened the events page and the event element is expanded
        When the user clicks on the event element
        Then the event element should collapse to hide its details
