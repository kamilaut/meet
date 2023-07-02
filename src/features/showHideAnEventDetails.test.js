import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventDetails.feature');

defineFeature(feature, (test) => {
  let AppWrapper;

  beforeEach(() => {
    AppWrapper = mount(<App />);
  });

  afterEach(() => {
    AppWrapper.unmount();
  });

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('that the user has opened the events page', () => {
    });

    when('the page loads', () => {
    });

    then('the event element should be collapsed by default', async () => {
      await AppWrapper.update();
      expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('that the user has opened the events page and the event element is collapsed', () => {
    });

    when('the user clicks on the event element', async () => {
      await AppWrapper.update();
      AppWrapper.find('.event').at(0).find('.toggle-details-btn').simulate('click');
    });

    then('the event element should expand to show its details', () => {
      expect(AppWrapper.find('.event').at(0).find('.event-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('that the user has opened the events page and the event element is expanded', () => {
      // simulating an initial click to expand the event
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });
  
    when('the user clicks on the event element', async () => {
      await AppWrapper.update();
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });
  
    then('the event element should collapse to hide its details', () => {
      expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
    });
  });
});