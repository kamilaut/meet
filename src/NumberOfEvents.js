import React, { Component } from 'react';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 35,
    errorText: ''
  }
  
  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 100) {
      return this.setState({
        errorText: 'Please enter a number between 0 and 100',
        numberOfEvents:''
      });
    } else {
      this.setState({ 
        numberOfEvents: number,
        errorText: '',
      });
      this.props.updateEventCount(event.target.value);
    }
  };

  render() {
    return (
      <div>
        <p>Limit search results </p>
        
        <input type="number" id="numberInput" value={this.state.numberOfEvents} className="numberInput" onChange={(e) => this.handleInputChanged(e)} />
      </div>
    );
  }
}

export default NumberOfEvents;