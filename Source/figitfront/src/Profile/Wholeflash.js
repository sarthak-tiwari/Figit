import React from 'react';
import Toggle from './Toggle';
import Flashbut2 from './Flashbut2'
import Flashbut from './Flashbut';
import Flashbut3 from './Flashbut3';
import './Flashbut.css';
class Wholeflash extends React.Component {

    constructor( data )
    {
        super( data )
        this.state = { showInt : 1 };
        this.toggleDiv1 = this.toggleDiv1.bind(this)
        this.toggleDiv2 = this.toggleDiv2.bind(this)
        this.toggleDiv3 = this.toggleDiv3.bind(this)
    }

    toggleDiv1 = () => {
        //const { show } = this.state
        this.setState( { show : !this.state.show } )
        this.setState( { showInt : 1 } )
    }

    toggleDiv2 = () => {
        //const { show } = this.state
        this.setState( { show : !this.state.show } )
        this.setState( { showInt : 2 } )
    }

    toggleDiv3 = () => {
        //const { show } = this.state
        this.setState( { show : !this.state.show } )
        this.setState( { showInt : 3 } )
    }

    render(){
        return(  <div>
        <button class="button" onClick = {this.toggleDiv1}>Pie Graph</button>
        <button class="button button2" onClick = {this.toggleDiv2}>Line Graph</button>
        <button class="button button3" onClick = {this.toggleDiv3}>Bar Graph</button>
        { (this.state.showInt === 1) && Toggle(1) }
        { (this.state.showInt === 2) && Toggle(2) }
        { (this.state.showInt === 3) && Toggle(3) }
      </div>
          
          
       
        );
    }
}
export default Wholeflash;