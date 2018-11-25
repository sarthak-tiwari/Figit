import React from 'react';
import PieChartr from './Chart/PieChart';
import Linechartr from './Chart/Linechart';
import BarGraphr from './Chart/BarGraph';
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
        return(  <div class="flashb">
        <button class="button" onClick = {this.toggleDiv1}>Pie Graph</button>
        <button class="button button2" onClick = {this.toggleDiv2}>Line Graph</button>
        <button class="button button3" onClick = {this.toggleDiv3}>Bar Graph</button>
        { (this.state.showInt === 1) && <PieChartr />}
        { (this.state.showInt === 2) && <Linechartr /> }
        { (this.state.showInt === 3) && <BarGraphr /> }
      </div>
          
          
       
        );
    }
}
export default Wholeflash;