import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Help from './Help/Help';
import CommitList from './CommitList/CommitList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommitList></CommitList>
      </div>
    );
  }
}

export default App;
