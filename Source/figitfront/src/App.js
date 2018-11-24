import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Help from './Help/Help';
import PullRequest from './pullReq/pullReq';


class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
    var test = new Object();
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData() {
    var test = [
      [['x1', "bpanda1"], ['x2', 10]],
      [['x1', "bpanda2"], ['x2', 7]],
      [['x1', "bpanda3"], ['x2', 17]],
      [['x1', "bpanda4"], ['x2', 4]]
    ];
    // Ajax calls here
    var xValues = [];
    var yValues = [];
    for(var i=0; i<test.length; i++) {
        xValues.push(test[i][0][1]);
        yValues.push(test[i][1][1]);
    }
    var yAxisName = "Count";
    
    var backgroundColor = [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
    this.setState({
      
      chartData:{
        labels: xValues,
        datasets:[
          {
            label:yAxisName,
            data: yValues,
            backgroundColor: 'blue',
            fill:false,
            lineTension: 0
          }
        ]
      }
    });
  }


  myFunction() {
    alert("I am an alert box!");
  }
  
  render() {
    return (
      <div>
        <PullRequest chartData={this.state.chartData} location="Commit Graph" legendPosition="bottom"/>  
      </div>

    );
  }
}

export default App;
