import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './Signin/Signin';

class App extends Component {
  render() {
    return (
      <div className="App">  
		    <Signin />
      </div>
    );
  }
}

export default App;
