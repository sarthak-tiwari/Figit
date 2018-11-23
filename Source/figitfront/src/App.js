import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import Help from './Help/Help';
import CommitList from './CommitList/CommitList';
import PullRequest from './pullReq/pullReq';
import Firstpage from './Firstpage/Firstpage';
import Addrepository from './Addrepository/Addrepository';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  
  showAlert() {
    ReactDOM.render(<Help/>, document.getElementById('root'));
  }
  
  render() {
    return (
      <div className="App">
        <CommitList></CommitList>
      </div>
    );
  }
}
export default App;

