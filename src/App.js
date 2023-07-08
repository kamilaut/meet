import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { InfoAlert, ErrorAlert } from './Alert';

class App extends Component {
  _isMounted = false;

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    infoAlert: '',
    errorAlert: '',
  };

  componentDidMount() {
    this._isMounted = true;
    getEvents().then((events) => {
      if (this._isMounted) {
        const filteredEvents = events.slice(0, 32);
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
        errorAlert: '', // Clear the error alert when updating events
      });
    });
  };
  

  render() {
    return (
      <div className="App">
        <div className="alerts-container">
          {this.state.infoAlert && <InfoAlert text={this.state.infoAlert} />}
          {this.state.errorAlert && <ErrorAlert text={this.state.errorAlert} />}
        </div>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          setInfoAlert={(message) => this.setState({ infoAlert: message })}
          setErrorAlert={(message) => this.setState({ errorAlert: message })}
        />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
          setErrorAlert={(message) => this.setState({ errorAlert: message })}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
