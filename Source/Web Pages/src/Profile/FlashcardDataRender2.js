import React from 'react';
import FlashcardData from './FlashcardData';


class FlashcardDataRender2 extends React.Component {

    state = {
      flashcards: [
        { uname:'Yuti', date:'11/23/1995'}
      ]
    }
  
    render() {
      return(
        <div>
            <FlashcardData color="cir2" mainheading="% of change" heading1="Last commit by:" uname={this.state.flashcards[0].uname} heading2="Last commit date:" date={this.state.flashcards[0].date}></FlashcardData>
        </div>
      );
    }
  }
  
  export default FlashcardDataRender2;