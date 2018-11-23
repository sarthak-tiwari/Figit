import React, { Component } from 'react';
import './App.css';
import Firstpage from './Firstpage/Firstpage';
import Addrepository from './Addrepository/Addrepository';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return(
      <div className ="App"> 
	      <Addrepository></Addrepository>
      </div>
    );
  }
}
export default App;

