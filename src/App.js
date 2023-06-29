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
    numberOfEvents: 32 // setting the deafault value for number of events
  }
  
  componentDidMount() {
    this._isMounted = true;
    getEvents().then((events) => {
      if (this._isMounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this._isMounted = false;
  }
  
  updateEvents = (location, eventCount) => {
    const locationFilter = location || this.state.currentLocation;
    const numberOfEventsFilter = eventCount || this.state.numberOfEvents;
    getEvents().then((events) => {
      let locationEvents = events;

      if (locationFilter !== "all") {
        locationEvents = events.filter((event) => event.location === location)
      }
      const filteredEvents = locationEvents.slice(0, numberOfEventsFilter);

      this.setState({
        events: filteredEvents,
      });
    });
  }
  
  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.NumberOfEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
