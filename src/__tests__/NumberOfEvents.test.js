import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";


describe('NumberOfEvents', () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
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
});