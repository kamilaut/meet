import React from "react";
import { shallow, mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";
import EventList from "../EventList";

describe("NumberOfEvents", () => {
  let NumberOfEventsWrapper;
  let AppWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents updateEvents={() => {}} numberOfEvents={32} />
    );
    AppWrapper = mount(<App />);
  });

  afterAll(() => {
    NumberOfEventsWrapper.unmount();
    AppWrapper.unmount();
  });

  test('renders an input field with the class "number-of-events-input"', () => {
    expect(NumberOfEventsWrapper.find(".number-of-events-input")).toHaveLength(1);
  });

  test('the default value of the input field is 32', () => {
    expect(NumberOfEventsWrapper.find(".number-of-events-input").props().value).toEqual(32);
  });

  test('has a local state representing the value of the input field', () => {
    const inputValue = 10;
    NumberOfEventsWrapper.setState({ numberOfEvents: inputValue });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(inputValue);
  });

  test('changes the value of the input field when input changes', () => {
    const event = { target: { value: 20 } };
    NumberOfEventsWrapper.find('.number-of-events-input').simulate('change', event);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(20);
  });

  test('renders an input field with the class "number-of-events-input"', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input')).toHaveLength(1);
  });

  test('the default value of the input field is 32', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.number-of-events-input').props().value).toEqual(32);
  });

  test('has a local state representing the value of the input field', () => {
    const inputValue = 10;
    NumberOfEventsWrapper.setState({ numberOfEvents: inputValue });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(inputValue);
  });

  test('renders input element', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input')).toHaveLength(1);
  });

  test('renders NumberOfEvents component', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  test('default number of events is rendered', () => {
    expect(AppWrapper.find('.number-of-events-input').prop('value')).toBe(32);
  });

  test('changes the number of events', () => {
    const event = { target: { value: 10 } };
    AppWrapper.find('.number-of-events-input').simulate('change', event);
    expect(AppWrapper.find('.number-of-events-input').prop('value')).toBe(10);
  });

  test('updates the events list based on the number of events', () => {
    const numberOfEvents = 6;
    AppWrapper.find(NumberOfEvents).props().updateEvents(undefined, numberOfEvents);
    expect(AppWrapper.find(EventList).props().events).toHaveLength(numberOfEvents);
  });

  test('renders NumberOfEvents component', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  test('default number of events is rendered', () => {
    expect(AppWrapper.find('.number-of-events-input').prop('value')).toBe(10);
  });

  test('changes the number of events', () => {
    const event = { target: { value: 10 } };
    AppWrapper.find('.number-of-events-input').simulate('change', event);
    expect(AppWrapper.find('.number-of-events-input').prop('value')).toBe(10);
  });

  test('updates the events list based on the number of events', () => {
    const numberOfEvents = 4;
    AppWrapper.find(NumberOfEvents).props().updateEvents(null, numberOfEvents);
    // waiting for the event list to update
    return new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
      AppWrapper.update();
      expect(AppWrapper.find(EventList).props().events).toHaveLength(numberOfEvents);
    });
  });
});