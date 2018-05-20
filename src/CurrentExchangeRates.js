import React, { Component } from 'react'
import axios from 'axios';

import FormExchange from './FormExchange';
import CurrenciesTable from './CurrenciesTable';

const REMOTE_URL = "https://api.coinmarketcap.com/v2/ticker/";

class CurrentExchangeRates extends Component {
  state = {
    currency: "",
    curencies: {}
  };

  getCurencies = (currency, limit = 5) => {
    axios.get(`${REMOTE_URL}?convert=${currency}&limit=${limit}`)
      .then(res => {
        const curencies = res.data.data;
        this.setState({ curencies, currency });
      })
  }
  
  onChange = (e) => {
    const currency = e.target.value;
    this.getCurencies(currency);
  };

  componentDidMount() {
    const currency = this.props.currency;
    this.getCurencies(currency);
  }  

  render(){
    const {availible} = this.props;
    const {curencies} = this.state;
    let currency = this.state.currency || this.props.currency;

  	return (
      <div>
        <FormExchange
    	    onChange={this.onChange.bind(this)}
          currency={currency}
    	    availible={availible}
        />
        <CurrenciesTable curenciesList={curencies} currency={currency}/>
      </div>

  	)
  }
}

export default CurrentExchangeRates;