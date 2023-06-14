import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event />', () => {
  let EventWrapper;
  const event = mockData[0];

  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test('expect the default for event details to be showing at first', () => {
    expect(EventWrapper.state('showDetails')).toBe(false);
    expect(EventWrapper.find('.event-details')).toHaveLength(0);
  });
  
  test('expect that the Event contains elements showing title, location, and date/time', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
    expect(EventWrapper.find('.event-location')).toHaveLength(1);
    expect(EventWrapper.find('.event-date-time')).toHaveLength(1);
  });

  test('expect to hide details when clicking on "hide details" button', () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find('.toggle-details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
    expect(EventWrapper.find('.event-details')).toHaveLength(0);
  });

  test('expect the button text to be "Hide Details" when event details are shown', () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find('.toggle-details-btn').text()).toBe('Hide Details');
  });

  test('expect to show details when clicking on "show details" button', () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find('.toggle-details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
  });

  test('expect the button text to be "Show Details" when event details are hidden', () => {
    EventWrapper.setState({ showDetails: false });
    expect(EventWrapper.find('.toggle-details-btn').text()).toBe('Show Details');
  });
});