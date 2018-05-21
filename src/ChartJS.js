import React, { Component }  from 'react';
import {Line} from 'react-chartjs-2';

class ChartJS extends Component {

  render(){
    const {data, labels, label} = this.props;
    
    let dataLine = {
      labels: labels,
      datasets: [
        {
          label: label,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: data
        }
      ]
    };

    return (
      <div>
        <Line
          data={dataLine}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true,
            type: 'line'
          }}
        />
      </div>
  )
}
};

export default ChartJS;