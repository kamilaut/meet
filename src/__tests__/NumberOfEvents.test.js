import React from "react";
import { shallow, mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import App from '../App';
import EventList from '../EventList';

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
  
  test('renders input element', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input')).toHaveLength(1);
  });

});

describe('<NumberOfEvents /> integration', () => {
  test('default number of events is set correctly', () => {
    const wrapper = shallow(<NumberOfEvents />);
    expect(wrapper.state('numberOfEvents')).toBe(32);
  });
});

describe('<NumberOfEvents /> integration', () => {
  test('number of events state updates on input change', () => {
    const wrapper = shallow(<NumberOfEvents />);
    const event = { target: { value: 10 } };
    wrapper.find('.number-of-events-input').simulate('change', event);
    expect(wrapper.state('numberOfEvents')).toBe(10);
  });
  
  
});

describe('<NumberOfEvents /> integration', () => {
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
    AppWrapper.find('.number-of-events-input').simulate('change', { target: { value: numberOfEvents } });
    expect(AppWrapper.find(EventList).prop('events')).toHaveLength(numberOfEvents);
  });
});
