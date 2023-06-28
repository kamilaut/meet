import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Event from './Event';
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
    getEvents().then((events) => {
      let locationEvents = events;
      
      if (location && location !== "all") {
        locationEvents = events.filter((event) => event.location === location)
      }
      const numberOfEvents = eventCount || this.state.numberOfEvents;
      const filteredEvents = locationEvents.slice (0, numberOfEvents);
      
      this.setState({
        events: filteredEvents,
      });
    });
  }
  
  
  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents 
        updateEvents ={this.updateEvents}
        />
      </div>
    );
  }
}

export default App;
