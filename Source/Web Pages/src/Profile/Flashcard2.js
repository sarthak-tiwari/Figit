import React from 'react';
import Toggle from './Toggle';
import './Flashcard.css';
import FlashcardData from './FlashcardData';
import FlashcardDataRender2 from './FlashcardDataRender2';

class Flashcard2 extends React.Component {

    constructor( data )
    {
        super( data )
        this.state = { show : false };
        this.toggleDiv1 = this.toggleDiv1.bind(this)
    }

    toggleDiv1 = () => {
        const { show } = this.state
        this.setState( { show : !show } )
    }

    render(){
        return( 
                <div class="row">
                <div class="column">
                
                <button onClick = {this.toggleDiv1} >            
                    <FlashcardDataRender2 />
                </button>
                { this.state.show && <Toggle /> }
                </div>
                </div>
            
             );  
    
        }
    }
    
    export default Flashcard2;