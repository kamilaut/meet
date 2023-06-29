import React from "react";
import { shallow, mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";
import EventList from "../EventList";

describe("<NumberOfEvents /> unit tests", () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents updateEvents={() => { }} numberOfEvents={32} />
    );
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
    const numberOfEventsState = NumberOfEventsWrapper.state('numberOfEvents');
    expect(numberOfEventsState).toEqual(inputValue);
    expect(NumberOfEventsWrapper.find(".number-of-events-input").props().value).toEqual(numberOfEventsState)
  });

  test('changes the value of the input field when input changes', () => {
    const event = { target: { value: 20 } };
    NumberOfEventsWrapper.find('.number-of-events-input').simulate('change', event);
    expect(NumberOfEventsWrapper.find(".number-of-events-input").props().value).toEqual(20)
  });

  test('renders input element', () => {
    expect(NumberOfEventsWrapper.find('input')).toHaveLength(1);
  });
});

describe('<NumberOfEvents /> Integration', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = mount(<App />);
  });

  afterAll(() => {
    AppWrapper.unmount();
  });

  test('renders NumberOfEvents component', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  test('updates the events list based on the number of events', async () => {
    const numberOfEvents = 5;
    await AppWrapper.find(NumberOfEvents).props().updateEvents(undefined, numberOfEvents);
    await AppWrapper.update();
    expect(AppWrapper.find(EventList).props().events).toHaveLength(numberOfEvents);
  });

  test('updates the events list based on the number of events input change', async () => {
    const event = { target: { value: 4 } };
    await AppWrapper.find('.number-of-events-input').simulate('change', event);
    await AppWrapper.update();
    expect(AppWrapper.find(EventList).props().events).toHaveLength(event.target.value);
  });
})