import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { InfoAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    infoText: '',
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, this.state.numberOfEvents), locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    const numberOfEvents = eventCount || this.state.numberOfEvents;
    this.setState({ infoText: '' });

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
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <InfoAlert text={this.state.infoText} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
