import React from 'react';
import Toggle from './Toggle';
import './Flashcard.css';
import FlashcardData from './FlashcardData';
import FlashcardDataRender from './FlashcardDataRender';


class Flashcard extends React.Component {

    constructor( props )
    {
        super( props )
        this.state = { show : false };
        this.toggleDiv = this.toggleDiv.bind(this)
    }
    
    toggleDiv = () => {
        const { show } = this.state
        this.setState( { show : !show } )
    }
    
    /*const flashcard = (data) => { */
    render(){
    return( 
            <div class="row">
            <div class="column">
            <button onClick = {this.toggleDiv} >            
                <FlashcardDataRender />
            </button>
            { this.state.show && <Toggle /> }
            </div>
            </div>
         );  

    }
}

export default Flashcard;