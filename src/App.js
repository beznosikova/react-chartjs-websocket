import React, { Component } from 'react';
import CurrentExchangeRates from './CurrentExchangeRates';

import './App.css';

const availibleCurencies = ['USD', 'EUR', 'RUB'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Example</h1>
        </header>
        <div className="App-intro">
          <CurrentExchangeRates currency='RUB' availible={availibleCurencies}/>
        </div>
      </div>
    );
  }
}

export default App;
