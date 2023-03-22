FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

Story: As a user, Ishould be able to filter events by city so that Ican see the list ofevents that take place in that city. This feature willallow users to easily find and access the events that are happening in their preferred city. They willnot have to go through a long list ofevents to find the ones that are relevant to them.

**Scenario 1: An event element is collapsed by default**

**Given** that the user has opened the events page 

**When** the page loads

**Then** the event element should be collapsed by default

**Scenario 2: User can expand an event to see its details**

**Given** that the user has opened the events page and the event element is collapsed 

**When** the user clicks on the event element

**Then** the event element should expand to show its details

**Scenario 3: User can collapse an event to hide its details**

**Given** that the user has opened the events page and the event element is expanded 

**When** the user clicks on the event element

**Then** the event element should collapse to hide its details

FEATURE 3: SPECIFYNUMBER OF EVENTS

Story: As a user, Iwould like to be able to show/hide event details so that Ican see more/less information about an event.

**Scenario 1: When user hasn’t specified a number, 32 is the default number**

**Given** that the user has opened the events page

**When** the user has not specified the number of events to be displayed

**Then** the default number of events displayed should be 32

**Scenario 2: User can change the number of events they want to see**

**Given** that the user has opened the events page

**When** the user selects the option to change the number of events displayed

**Then** the page should update to display the selected number of events and the user should be able to see the selected number of events on the page.

FEATURE 4: USE THE APP WHEN OFFLINE

Story: As a user, Iwould like to be able to use the app when offline so that Ican see the events I viewed the last time Iwas online.

**Scenario 1: Show cached data when there’s no internet connection**

**Given** that the user has previously loaded the events page and the user's device has no internet connection

**When** the user tries to access the events page

**Then** the page should display the cached data from the user's previous session

**Scenario 2: Show error when user changes the settings (city, time range)**

**Given** that the user has opened the events page and the user has selected a specific city and time range

**When** the user tries to change the city or time range settings

**Then** the page should display an error message to inform the user that the action is not allowed and the page should not update to show events for the newly selected city and time range.

FEATURE 5: DATAVISUALIZATION

Story: As a user, Iwould like to be able to see a chart showing the upcoming events in each city so that Iknow what events are organized in which city.

**Scenario: Show a chart with the number of upcoming events in each city**

**Given** that the user has opened the events page and there are upcoming events in multiple cities

**When** the user selects the option to view a chart of upcoming events by city

**Then** the page should display a chart with the number of upcoming events in each city and the chart should be organized by the city with the highest number of upcoming events displayed first. The user should be able to view the chart to get an overview of the upcoming events in each city.
