import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, (test) => {
  let AppWrapper;

  beforeEach(() => {
    AppWrapper = mount(<App />);
  });

  afterEach(() => {
    AppWrapper.unmount();
  });

  test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
    given('user hasn’t searched for any city', () => {

    });

    when('the user opens the app', () => {

    });

    then('the user should see the list of upcoming events.', () => {

    });
});

  test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
    given('the main page is open', () => {
 
    });

    when('the user starts typing in the city textbox', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
    });

    then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2); 
    });
  });

  test('User can select a city from the suggested list', ({ given, when, then }) => {
    given('user was typing “Berlin” in the city textbox', () => {

    });

    given('the list of suggested cities is showing', () => {
    });

    when('the user selects a city (e.g., “Berlin, Germany”) from the list', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    });

    then('their city should be changed to that city (i.e., “Berlin, Germany”)', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      expect(CitySearchWrapper.state('query')).toBe("Berlin"); 
    });
    

    then('the user should receive a list of upcoming events in that city', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length); 
    });
  });
});


