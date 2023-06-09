import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils'; 
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  let AppWrapper;

  beforeEach(() => {
    AppWrapper = mount(<App />);
  });

  afterEach(() => {
    AppWrapper.unmount();
  });

  test('When user hasn\'t specified a number, 32 is the default number', async ({ given, when, then }) => {
    given('that the user has opened the events page', () => {
    });

    when('the user has not specified the number of events to be displayed', () => {
    });

    then('the default number of events displayed should be 32', async () => {
      await act(async () => {
        AppWrapper.update();
        await new Promise((resolve) => setTimeout(resolve, 0)); // delay to allow the component to update
        expect(AppWrapper.find('.event')).toHaveLength(32);
      });
    });
  });
  
  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('that the user has opened the events page', () => {
    });

    when('the user selects the option to change the number of events displayed', () => {
      AppWrapper.find('.number-of-events-input').simulate('change', { target: { value: 10 } });
    });

    then('the page should update to display the selected number of events', async () => {
      await AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(10);
    });

    then('the user should be able to see the selected number of events on the page', () => {
      const numberOfEventsDisplayed = AppWrapper.find('.event').length;
      expect(numberOfEventsDisplayed).toBe(10);
    });
  });
});

