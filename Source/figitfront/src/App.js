import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import ReactDOM from 'react-dom';
import Help from './Help/Help';
import CommitList from './CommitList/CommitList';
import PullRequest from './pullReq/pullReq';
import LineChart from './Chart/LineChart';
import PieChart from './Chart/PieChart';
import BarGraph from './Chart/BarGraph';


class App extends Component {
  render() {
    return (
      <div>
        <LineChart location="Commit Graph" legendPosition="bottom"/>
        <PieChart location="Commit Graph" legendPosition="right"/>
        <BarGraph location="Commit Graph" legendPosition="right"/>  
      </div>

    );
  }
}

export default App;