import React from 'react';
import Toggle from './Toggle';
import './Flashcard.css';
import FlashcardData from './FlashcardData';
import FlashcardDataRender3 from './FlashcardDataRender3';


class Flashcard3 extends React.Component {

    constructor( props1 )
    {
        super( props1 )
        this.state = { show : false };
        this.toggleDiv2 = this.toggleDiv2.bind(this)
    }
    
    toggleDiv2 = () => {
        const { show } = this.state
        this.setState( { show : !show } )
    }
    
    /*const flashcard = (data) => { */
    render(){
    return( 
            <div class="row">
            <div class="column">
            <button onClick = {this.toggleDiv2} >            
                <FlashcardDataRender3 />
            </button>
            { this.state.show && <Toggle /> }
            </div>
            </div>
         );  

    }
}

export default Flashcard3;