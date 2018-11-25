import React from 'react';
import './Flashbut.css';
import Toggle from './Toggle';

class Flashbut3 extends React.Component {

    constructor( data )
    {
        super( data )
        this.state = { show : false };
        this.toggleDiv3 = this.toggleDiv3.bind(this)
    }

    toggleDiv3 = () => {
        const { show } = this.state
        this.setState( { show : !show } )
    }

    render(){
        return( <div>
        <button class="button button3" onClick = {this.toggleDiv3}>Bar Graph</button>
        { this.state.show && <Toggle /> }
</div>
        );
    }
}
export default Flashbut3;