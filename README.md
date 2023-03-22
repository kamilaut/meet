FEATURE 1: FILTER EVENTS BY CITY. 

Story: As a user, I should be able to “filter events by city” so that I can see the list of events that take place in that city.

**SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.**

**Given** user hasn’t searched for any city

**When** the user opens the app

**Then** the user should see a list of all upcoming events

**SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.**

**Given** the main page is open

**When** user starts typing in the city textbox

**Then** the user should see a list of cities (suggestions) that match what they’ve typed

**SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.**

**Given** the user was typing “Berlin” in the city textbox. And the list of suggested cities is showing

**When** the user selects a city (e.g., “Berlin, Germany”) from the list. Then their city should be changed to that city (i.e., “Berlin, Germany”)

**And** the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

Story: As a user, I should be able to filter events by city so that I can see the list ofevents that take place in that city.

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

FEATURE 3: SPECIFY NUMBER OF EVENTS

Story: As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

**Scenario 1: When user hasn’t specified a number, 32 is the default number**

**Given** that the user has opened the events page

**When** the user has not specified the number of events to be displayed

**Then** the default number of events displayed should be 32

**Scenario 2: User can change the number of events they want to see**

**Given** that the user has opened the events page

**When** the user selects the option to change the number of events displayed

**Then** the page should update to display the selected number of events 

**And** the user should be able to see the selected number of events on the page

FEATURE 4: USE THE APP WHEN OFFLINE

Story: As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

**Scenario 1: Show cached data when there’s no internet connection**

**Given** that the user has previously loaded the events page, and the user's device has no internet connection

**When** the user tries to access the events page

**Then** the page should display the cached data from the user's previous session

**Scenario 2: Show error when user changes the settings (city, number of events)**

**Given** that the user has opened the events page 

**When** the user tries to change the city or number of events settings

**Then** the page should display an error message to inform the user that the action is not allowed 

**And** the page should not update to show events for the newly selected city and number of events.

FEATURE 5: DATA VISUALIZATION

Story: As a user, I would like to be able to see a chart showing the upcoming events in each city so that Iknow what events are organized in which city.

**Scenario: Show a chart with the number of upcoming events in each city**

**Given** that the user has opened the events page and there are upcoming events in multiple cities

**When** the user selects the option to view a chart of upcoming events by city

**Then** the page should display a chart with the number of upcoming events in each city 

**And** the chart should be organized by the city with the highest number of upcoming events displayed first. 
