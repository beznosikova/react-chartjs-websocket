import React, { Component } from 'react';
import CurrentExchangeRates from './CurrentExchangeRates';
import CurrenciesConverter from './CurrenciesConverter';

import './App.css';

const availibleCurencies = ['USD', 'EUR', 'RUB'];
// const availibleCryptoCurencies = ['Bitcoin', 'Ripple', 'Ethereum', ''];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Cryptocurrency Example</h1>
        </header>
        <div className="App-intro">
          <CurrentExchangeRates currency='RUB' availible={availibleCurencies}/>
        </div>
        <div className="App-intro">
          <CurrenciesConverter availible={availibleCurencies}/>
        </div>        
      </div>
    );
  }
}

export default App;
