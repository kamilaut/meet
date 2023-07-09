import React, { useEffect, useState } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { InfoAlert, WarningAlert } from './Alert';

const App = () => {
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [currentLocation, setCurrentLocation] = useState('all');
  const [infoText, setInfoText] = useState('');
  const [warningAlertMessage, setWarningAlertMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const events = await getEvents();
      if (events) {
        const filteredEvents = currentLocation === 'all' ? events : events.filter((event) => event.location === currentLocation);
        setEvents(filteredEvents.slice(0, numberOfEvents));
        setLocations(extractLocations(events));
        if (filteredEvents.length === 0) {
          setInfoText('No events found for the selected location.');
        } else {
          setInfoText('');
        }
      } else {
        setEvents([]);
        setLocations([]);
        setInfoText('Failed to fetch events. Please try again later.');
      }
    };

    if (navigator.onLine) {
      setWarningAlertMessage('');
      fetchData();
    } else {
      setWarningAlertMessage('You are currently offline. The event data may not be up to date.');
    }
  }, [currentLocation, numberOfEvents]);

  const updateEvents = (location, eventCount) => {
    setInfoText('');
    setCurrentLocation(location || 'all');
    setNumberOfEvents(eventCount || numberOfEvents);
  };

  return (
    <div className="App">
      <h1 className="header">MEET APP</h1>
      <CitySearch locations={locations} updateEvents={updateEvents} />
      <p className="number-of-events-label">Number of Events</p>
      <NumberOfEvents numberOfEvents={numberOfEvents} updateEvents={updateEvents} />
      {infoText.length !== 0 && <InfoAlert text={infoText} />}
      {warningAlertMessage.length !== 0 && <WarningAlert text={warningAlertMessage} />}
      <EventList events={events} />
    </div>
  );
};

export default App;

