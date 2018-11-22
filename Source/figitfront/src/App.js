import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Help from './Help/Help';
import PullRequest from './pullReq/pullReq';

class App extends Component {
  
  showAlert() {
    ReactDOM.render(<Help/>, document.getElementById('root'));
  }
  
  render() {
    return (
      <div>
        <button onClick={this.showAlert}>Help Button</button>; 
    </div>
    );
  }
}

export default App;
