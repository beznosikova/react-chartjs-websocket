import React, { Component } from 'react'
import Websocket from 'react-websocket';
import ChartJS from './ChartJS';

const REMOTE_URL = "wss://api.gemini.com/v1/marketdata/btcusd";

class ChartRealTime extends Component {
  state = {
    pointsList:{},
    labels:[], 
    data:[]
  };

  currentValue = {};
  timer = null;

  addValueToList(){
    let date = new Date(this.currentValue['timestamp']*1000);
    if (this.state.labels.length>30){
      this.state.labels.splice(0,1);
      this.state.data.splice(0,1);
    }

    this.setState({ 
      labels: [...this.state.labels, date.toLocaleString().slice(-8)], 
      data: [...this.state.data, this.currentValue['events'][0]['price']], 
    });
  }
    
  handleData(data) {
    this.currentValue = JSON.parse(data);
    if (this.state.labels.length < 2 
      && this.currentValue['timestamp'] != null){
      let date = new Date(this.currentValue['timestamp']*1000);
      this.setState({ 
        labels: [...this.state.labels, date.toLocaleString().slice(-8)], 
        data: [...this.state.data, this.currentValue['events'][0]['price']], 
      });
    }
  }  

  render(){
    const {labels, data} = this.state;
    if (!this.timer)
      this.timer = setInterval(()=>this.addValueToList(), 2000);

    return (
      <div>
        <Websocket url={REMOTE_URL}
              onMessage={this.handleData.bind(this)}/>
        <ChartJS labels={labels} data={data} label="Bitcoin - USD - Real time"/>
      </div>
      )
  }
}

export default ChartRealTime;