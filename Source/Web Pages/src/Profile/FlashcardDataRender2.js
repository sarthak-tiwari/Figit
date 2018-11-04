import React from 'react';
import FlashcardData from './FlashcardData';


class FlashcardDataRender2 extends React.Component {

    state = {
      flashcards: [
        { value1:'50%', value2:'Unknown'}
      ]
    }
  
    render() {
      return(
        <div>
            <FlashcardData color="cir2" mainheading="% of change" heading1="% of code changes" value1={this.state.flashcards[0].value1} heading2="Unknown:" value2={this.state.flashcards[0].value2}></FlashcardData>
        </div>
      );
    }
  }
  
  export default FlashcardDataRender2;