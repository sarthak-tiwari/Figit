import React from 'react';
import FlashcardData from './FlashcardData';


class FlashcardDataRender3 extends React.Component {

    state = {
      flashcards: [
        { value1:'6', value2:'Unknown'}
      ]
    }
  
    render() {
      return(
        <div>
            <FlashcardData color="cir3" mainheading="Pull request" heading1="Pull request number:" value1={this.state.flashcards[0].value1} heading2="Unknown:" value2={this.state.flashcards[0].value2}></FlashcardData>
        </div>
      );
    }
  }
  
  export default FlashcardDataRender3;