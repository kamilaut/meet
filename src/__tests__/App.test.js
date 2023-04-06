import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';


describe('<App /> component', () => {
     let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
    test('render list of events', () => {
      const AppWrapper = shallow(<App />);
      expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
    
    test('render CitySearch', () => {
      const AppWrapper = shallow(<App />);
      expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
    test('pass NumberOfEvents state to', () => {
      const AppWrapper = mount(<App />);
      const AppNumberOfEventsState = AppWrapper.state('numberOfEvents');
      expect(AppNumberOfEventsState).not.toEqual(undefined);
      expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(35);
      AppWrapper.unmount();
    });
  });