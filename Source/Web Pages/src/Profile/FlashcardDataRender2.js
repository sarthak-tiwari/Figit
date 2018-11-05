import React from 'react';
import FlashcardData from './FlashcardData';


class FlashcardDataRender2 extends React.Component {

    state = {
      flashcards: [
        { value1:'100', value2:'30'}
      ]
    }
  
    render() {
      return(
        <div>
            <FlashcardData color="cir2" mainheading="% Code Changes" heading1="Number Of Additions:" value1={this.state.flashcards[0].value1} heading2="Number Of Deletions:" value2={this.state.flashcards[0].value2}></FlashcardData>
        </div>
      );
    }
  }
  
  export default FlashcardDataRender2;