import React from 'react';
import FlashcardData from './FlashcardData';


class FlashcardDataRender extends React.Component {

    state = {
      flashcards: [
        { value1:'116', value2:'20'}
      ]
    }
  
    render() {
      return(
        <div>
            <FlashcardData color="cir1" mainheading="Commit Info" heading1="Commit Number:" value1={this.state.flashcards[0].value1} heading2="Files Modified:" value2={this.state.flashcards[0].value2}></FlashcardData>
        </div>
      );
    }
  }
  
  export default FlashcardDataRender;