import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { InfoAlert, WarningAlert } from './Alert';
import CityEventsChart from './CityEventsChart';
import EventGenresChart from './EventGenresChart';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    infoText: '',
    warningAlertMessage: '',
  };

  componentDidMount() {
    this.mounted = true;
    this.checkOnlineStatus();
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  checkOnlineStatus = () => {
    if (navigator.onLine) {
      this.setState({
        warningAlertMessage: '',
      });
    } else {
      this.setState({
        warningAlertMessage: 'You are currently offline. The event data may not be up to date.',
      });
    }
  };

  updateEvents = (location, eventCount) => {
    const numberOfEvents = eventCount || this.state.numberOfEvents;
    this.setState({ infoText: '' });

    this.checkOnlineStatus();

    getEvents().then((events) => {
      let filteredEvents = events;
      if (location && location !== 'all') {
        filteredEvents = events.filter((event) => event.location === location);
      }
      this.setState({
        events: filteredEvents.slice(0, numberOfEvents),
        currentLocation: location || 'all',
        numberOfEvents,
      });

      if (filteredEvents.length === 0) {
        this.setState({
          infoText: 'No events found for the selected location.',
        });
      }
    });
  };

  render() {
    const { infoText, warningAlertMessage, events } = this.state;
    return (
      <div className="App">
        <h1 className="header">MEET APP</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <p className="number-of-events-label">Number of Events:</p>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        {infoText.length !== 0 && <InfoAlert text={infoText} />}
        {warningAlertMessage && <WarningAlert text={warningAlertMessage} />}
        <div className="charts-container">
          <CityEventsChart allLocations={this.state.locations} events={events} />
          <EventGenresChart events={events} />
        </div>
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
