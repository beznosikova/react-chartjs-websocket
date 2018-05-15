import React, { Component } from 'react';
import CurrentExchangeRates from './components/CurrentExchangeRates';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Example</h1>
        </header>
        <div className="App-intro">
          <CurrentExchangeRates />
        </div>
      </div>
    );
  }
}

export default App;
