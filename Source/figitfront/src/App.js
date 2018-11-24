import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Help from './Help/Help';
import PullRequest from './pullReq/pullReq';
import LineChart from './Chart/LineChart';


class App extends Component {
  render() {
    return (
      <div>
        <LineChart location="Commit Graph" legendPosition="bottom"/>  
      </div>

    );
  }
}

export default App;
