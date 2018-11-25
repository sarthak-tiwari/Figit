import React from 'react';
import './Flashbut.css';
import Toggle from './Toggle';

class Flashbut2 extends React.Component {

    constructor( data )
    {
        super( data )
        this.state = { show : false };
        this.toggleDiv2 = this.toggleDiv2.bind(this)
    }

    toggleDiv2 = () => {
        const { show } = this.state
        this.setState( { show : !show } )
    }

    render(){
        return( <div>
        <button class="button button2" onClick = {this.toggleDiv2}>Line Graph</button>
        { this.state.show && <Toggle /> }
</div>
        );
    }
}
export default Flashbut2;