import React, { Component } from 'react';
import './App.css';

import ReactDOM from 'react-dom';
import Help from './Help/Help';
import CommitList from './CommitList/CommitList';
import PullRequest from './pullReq/pullReq';
import Firstpage from './Firstpage/Firstpage';
import Addrepository from './Addrepository/Addrepository';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Firstpage></Firstpage>
      </div>
    );
  }
}
export default App;

