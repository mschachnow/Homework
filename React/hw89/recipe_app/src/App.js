//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import WeatherInfo from './WeatherInfo';
import ListComponent from './ListComponent';


class App extends Component {
  state = {
    zipCodes: [
      {
        id: 1,
        zip: '08701'
      },
      {
        id: 2,
        zip: 11206
      },
      {
        id: 3,
        zip: 11209
      }
    ]
  }
  render() {
    return (
      <div >
        <div>
          <h1>My Weather App</h1>
          <hr />
          <ListComponent items={this.state.zipCodes} />
          <hr />
          <WeatherInfo weather={this.state.zipCodes[0]} />
        </div>
      </div>
    );
  }
}
export default App;
