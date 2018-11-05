import React from 'react';
import {Pie} from 'react-chartjs-2';


const ChoresChart = (props) => {
    const data = {

        labels: ["Palak", "Yuti", "Shefali"],
        datasets: [
          {
            data: [4, 5, 11],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
            ]
          }
        ]
    }
    const options = {

        title: {
            display: true,
            text: "Coomit Distribution for this Sprint",
            fontFamily: "Roboto",
            fontSize: 20,
            maintainAspectRatio: false,
          }
    }
  
    return (
      <Pie data={data} options={options} />
    )
  }
  
  export default ChoresChart;