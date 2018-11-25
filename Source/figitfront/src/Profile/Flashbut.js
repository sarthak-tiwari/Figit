import React from 'react';
import './Flashbut.css';
import Toggle from './Toggle';

class Flashbut extends React.Component {

    constructor( data )
    {
        super( data )
        this.state = { show : false,
                        showInt : 1 };
        this.toggleDiv1 = this.toggleDiv1.bind(this)
    }

    toggleDiv1 = () => {
        //const { show } = this.state
        this.setState( { show : !this.state.show } )
        this.setState( { showInt : -1 * this.state.showInt } )
    }

    render(){
        return( <div>
        <button class="button" onClick = {this.toggleDiv1}>Pie Graph</button>
        { (this.state.showInt === -1) && <Toggle /> }
        </div>
        );
    }
}
export default Flashbut;