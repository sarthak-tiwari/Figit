import React from 'react';
import FlashcardData from './FlashcardData';


class FlashcardDataRender3 extends React.Component {

    state = {
      flashcards: [
        { value1:'20', value2:'0'}
      ]
    }
  
    render() {
      return(
        <div>
            <FlashcardData color="cir3" mainheading="Pull Request" heading1="Approved Requests:" value1={this.state.flashcards[0].value1} heading2="Rejected Requests:" value2={this.state.flashcards[0].value2}></FlashcardData>
        </div>
      );
    }
  }
  
  export default FlashcardDataRender3;