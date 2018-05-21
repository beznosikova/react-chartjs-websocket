import React, { Component } from 'react'
import axios from 'axios';
import Websocket from 'react-websocket';

import FormExchange from './FormExchange';
import ChartJS from './ChartJS';

const REMOTE_URL = "https://min-api.cryptocompare.com/data/";
const INITIAL_PERIOD = 'month';
const availiblePeriods = {
  'day':    {limit:24, urlParams: 'histohour'}, 
  'month':  {limit:30, urlParams: 'histoday'}, 
  // 'year':   {limit:30, urlParams: 'histoday'}
};

class ChartStatic extends Component {
  state = {
    period: "",
    periodPointsList: {},
    periodPointsListRealTime: {}
  };

  onChange = (e) => {
    const period = e.target.value;
    this.getPeriodPoints(period);
  };  

  formtDate(date, period){
    return (period === 'month') ? date.slice(0, 10) : date.slice(-8);
  }

  getPeriodPoints = (period) => {
    
    axios.get(`${REMOTE_URL}${availiblePeriods[period]['urlParams']}?fsym=BTC&tsym=USD&limit=${availiblePeriods[period]['limit']}`)
      .then(res => {
        const result = res.data.Data;
        let periodPointsList = {};
        periodPointsList['labels'] = Object.values(result).map(
          (item, index) => (this.formtDate(new Date(item.time*1000).toLocaleString(), period) )
          );
        periodPointsList['data'] = Object.values(result).map((item, index) => (item.open));
        this.setState({ period, periodPointsList });
      })
  }

  componentWillMount() {
    this.getPeriodPoints(INITIAL_PERIOD);
  }  
  
  handleData(data) {
    let result = JSON.parse(data);
    console.log(result);
  }  

  render(){
    const {period} = this.state;
    const {labels, data} = this.state.periodPointsList;

    return (
      <div>
        <FormExchange
          onChange={this.onChange.bind(this)}
          valueSelected={period}
          availible={Object.keys(availiblePeriods)}
        >
          Chose period
        </FormExchange>
        <Websocket url='wss://api.gemini.com/v1/marketdata/btcusd'
              onMessage={this.handleData.bind(this)}/>
        <ChartJS labels={labels} data={data} label="Bitcoin - USD"/>
      </div>
      )
  }
}

export default ChartStatic;