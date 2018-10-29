import React, { Component } from 'react';
import './App.css';
import Profile from './Profile/Profile';
import Flashcard from './Profile/Flashcard';

class App extends Component {

  state = {
    myrofile: [
      { photo:'https://i.pinimg.com/236x/e2/72/e4/e272e4c7495706cf18f565e2c0d36078--baby-harry-potter-rainbow-baby.jpg', emailid:'yrdesai@asu.edu'}
    ],

    flashcards: [
      { uname:'Yuti', date:'11/23/1995'},
      { uname:'Yuti', date:'11/23/1995'},
      { uname:'Yuti', date:'11/23/1995'}
    ]
  }

  render() {
    return(
      <div className ="App">
      <Profile photo={this.state.myrofile[0].photo} emailid={this.state.myrofile[0].emailid}/>
      <Flashcard color="cir1" mainheading="Commit Info" heading1="Last commit by:" uname={this.state.flashcards[0].uname} heading2="Last commit date:" date={this.state.flashcards[0].date}></Flashcard>
      <Flashcard color="cir2" mainheading="% of change" heading1="Last commit by:" uname={this.state.flashcards[1].uname} heading2="Last commit date:" date={this.state.flashcards[0].date}></Flashcard>
      <Flashcard color="cir3" mainheading="Pull request" heading1="Last commit by:" uname={this.state.flashcards[2].uname} heading2="Last commit date:" date={this.state.flashcards[0].date}></Flashcard>
      </div>
    );
  }
}

export default App;