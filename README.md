# Meet App

A serverless, progressive web application (PWA) using React and a test-driven development (TDD) approach. The application utilizes the Google Calendar API to fetch upcoming events. The project combines serverless architecture and PWAs to provide benefits such as easy scalability, offline support, push notifications, responsive design, and cross-platform compatibility. The TDD approach ensures high-quality code and adherence to requirements. The app allows users to search for events based on various criteria and view event details.


[![HLU79zQ.md.jpg](https://iili.io/HLU79zQ.md.jpg)](https://freeimage.host/i/HLU79zQ)
## Live Demo Link
Please note that the app is in dev stage, it's not possible to deploy, becasue email won't be listed in the Test Users table in Google Calendar API dashboard. [Live Demo Link](https://github.com/kamilaut/meet/blob/main/livedemo.mp4)
## Built With

**React:** JavaScript library for building user interfaces.


**Google Calendar API:** Used to fetch upcoming events data.


**Serverless Functions:** Utilized for the authorization server using AWS Lambda.


**Git and GitHub:** Version control and code repository hosting.


**Chrome, Firefox, Safari, Edge, Opera, and IE11:** Supported web browsers.


**Lighthouse:** Used to ensure adherence to PWA checklist.


**Service Worker:** Enables offline functionality and improves performance in slow network conditions.

**GitHub Pages:** Deployment platform for the application.


**React Axios:** Used for API calls with async/await syntax.


**Rechart.js:** Data visualization library for creating charts.


**Testing Framework:** Used to write tests with a coverage rate of 90% or higher. Puppeteer (EndToEnd testing), Jest-Cucumber(Acceptance/BDD Testing), Enzyme (TDD).


**Online Monitoring Tool:** Implemented to monitor the application's performance and usage.


**Oauth2**


**PWA** (Progressive Web Apps)

## Live Demo, Deployment

[Live Demo Link](https://kamilaut.github.io/meet/)


## Getting Started

**To get a local copy up and running follow these simple example steps.**

### Prerequisites
Node.js and npm (Node Package Manager) should be installed on your local machine.

### Setup
- Clone the repository:
_git clone <repository_url>_

- Navigate to the project directory:
_cd <project_directory>_


### Install
- Install dependencies:

```
npm install 
```



### Usage
- Start the application:
```
npm start
```



An overview of the features implemented in the app. 

## Feature 1: Filter Events by City

**Story:** As a user, I should be able to "filter events by city" so that I can see the list of events that take place in that city.

**Scenario 1: When User Hasn't Searched for a City, Show Upcoming Events from All Cities**
- Given user hasn't searched for any city
- When the user opens the app
- Then the user should see a list of all upcoming events

**Scenario 2: User Should See a List of Suggestions When They Search for a City**
- Given the main page is open
- When user starts typing in the city textbox
- Then the user should see a list of cities (suggestions) that match what they've typed

**Scenario 3: User Can Select a City from the Suggested List**
- Given the user was typing "Berlin" in the city textbox and the list of suggested cities is showing
- When the user selects a city (e.g., "Berlin, Germany") from the list
- Then their city should be changed to that city (i.e., "Berlin, Germany")
- And the user should receive a list of upcoming events in that city

## Feature 2: Show/Hide an Event's Details

**Story:** As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.

**Scenario 1: An Event Element is Collapsed by Default**
- Given that the user has opened the events page
- When the page loads
- Then the event element should be collapsed by default

**Scenario 2: User Can Expand an Event to See Its Details**
- Given that the user has opened the events page and the event element is collapsed
- When the user clicks on the event element
- Then the event element should expand to show its details

**Scenario 3: User Can Collapse an Event to Hide Its Details**
- Given that the user has opened the events page and the event element is expanded
- When the user clicks on the event element
- Then the event element should collapse to hide its details

## Feature 3: Specify Number of Events

**Story:** As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

**Scenario 1: When User Hasn't Specified a Number, 32 Is the Default Number**
- Given that the user has opened the events page
- When the user has not specified the number of events to be displayed
- Then the default number of events displayed should be 32

**Scenario 2: User Can Change the Number of Events They Want to See**
- Given that the user has opened the events page
- When the user selects the option to change the number of events displayed
- Then the page should update to display the selected number of events
- And the user should be able to see the selected number of events on the page

## Feature 4: Use the App When Offline

**Story:** As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

**Scenario 1: Show Cached Data When There's No Internet Connection**
- Given that the user has previously loaded the events page and the user's device has no internet connection
- When the user tries to access the events page
- Then the page should display the cached data from the user's previous session

**Scenario 2: Show Error When User Changes the Settings (City, Number of Events)**
- Given that the user has opened the events page
- When the user tries to change the city or number of events settings
- Then the page should display an error message to inform the user that the action is not allowed
- And the page should not update to show events for the newly selected city and number of events

## Feature 5: Data Visualization

**Story:** As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

**Scenario: Show a Chart with the Number of Upcoming Events in Each City**
- Given that the user has opened the events page and there are upcoming events in multiple cities
- When the user selects the option to view a chart of upcoming events by city
- Then the page should display a chart with the number of upcoming events in each city
- And the chart should be organized by the city with the highest number of upcoming events displayed first

  

