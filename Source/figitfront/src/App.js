import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import ReactDOM from 'react-dom';
import Help from './Help/Help';
import CommitList from './CommitList/CommitList';
import PullRequest from './pullReq/pullReq';
import './index.js';
import Firstpage from './Firstpage/Firstpage';
import Addrepository from './Addrepository/Addrepository';
import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  
  render() {
    return(
      <Router>
      	<div className ="App">
	      <Route exact path="/" component={Firstpage} />
	      <Route path="/addrepository" component={Addrepository} />
	      <Route path="/dashboard" component={Dashboard} />
      	</div>
	  </Router>
    );
  }
}

export default App;

