import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Help from './Help/Help';
import CommitList from './CommitList/CommitList';
import PullRequest from './pullReq/pullReq';

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
