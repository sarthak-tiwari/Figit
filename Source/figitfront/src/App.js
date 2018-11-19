import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Help from './Help/Help';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Help></Help>
      </div>
    );
  }
}

export default App;
