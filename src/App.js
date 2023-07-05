import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';


class App extends Component {
  _isMounted = false;

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32, // setting the default value for the number of events
    currentLocation: 'all', // setting the default value for the current location
  };

  componentDidMount() {
    this._isMounted = true;
    getEvents().then((events) => {
      if (this._isMounted) {
        const filteredEvents = events.slice(0, 32); // limiting the initial events to 32
        this.setState({ events: filteredEvents, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  updateEvents = (location, eventCount) => {
    const locationFilter = location ? location : this.state.currentLocation;
    const numberOfEventsFilter = eventCount ? eventCount : this.state.numberOfEvents;

    getEvents().then((events) => {
      let filteredEvents = events;

      if (locationFilter !== 'all') {
        filteredEvents = events.filter((event) => event.location === locationFilter);
      }

      filteredEvents = filteredEvents.slice(0, numberOfEventsFilter);

      this.setState({
        events: filteredEvents,
        currentLocation: locationFilter,
        numberOfEvents: numberOfEventsFilter,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
