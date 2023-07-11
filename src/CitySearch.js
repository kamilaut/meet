import React, { Component } from 'react';
import { InfoAlert, ErrorAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: '',
    errorText: '',
  };

  handleInputChanged = (event) => {
    const value = event.target.value;

    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });

    let infoText = '';
    if (suggestions.length === 0) {
      infoText = "We cannot find the city you are looking for. Please try another city.";
    }

    this.setState({
      query: value,
      suggestions,
      infoText,
      errorText: '',
    });
  };

  handleItemClicked = (suggestion) => {
    if (suggestion === 'all') {
      this.setState({
        query: '',
        showSuggestions: false,
        infoText: '',
        errorText: '',
      });
    } else {
      this.setState({
        query: suggestion,
        showSuggestions: false,
        infoText: '',
        errorText: '',
      });
    }
    this.props.updateEvents(suggestion, undefined);
  };

  render() {
    return (
      <div className="CitySearch">
        <span>Enter a city: </span>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        />
        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>
              {suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
        <div className="alerts-container">
          {this.state.infoText.length ? <InfoAlert text={this.state.infoText} /> : null}
          {this.state.errorText.length ? <ErrorAlert text={this.state.errorText} /> : null}
        </div>
      </div>
    );
  }
}

export default CitySearch;


