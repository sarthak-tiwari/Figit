import React, { Component } from 'react';
import './App.css';
import Profile from './Profile/Profile';

class App extends Component {

  state = {
    myrofile: [
      { photo:'https://i.pinimg.com/236x/e2/72/e4/e272e4c7495706cf18f565e2c0d36078--baby-harry-potter-rainbow-baby.jpg'},
      { emailid:'yrdesai@asu.edu'}
    ]
  }

  render() {
    return(
      <div className ="App">
      <Profile photo={this.state.myrofile[0].photo} emailid={this.state.myrofile[1].emailid}/>
      </div>
    );
  }
}

export default App;