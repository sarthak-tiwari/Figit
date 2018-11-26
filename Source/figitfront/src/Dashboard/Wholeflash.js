import React from 'react';
import PieChart from './Chart/PieChart';
import Linechart from './Chart/Linechart';
import BarGraph from './Chart/BarGraph';
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
        { (this.state.showInt === 1) && <PieChart reponame={this.props.reponame}/>}
        { (this.state.showInt === 2) && <Linechart reponame={this.props.reponame} /> }
        { (this.state.showInt === 3) && <BarGraph reponame={this.props.reponame} /> }
      </div>
          
          
       
        );
    }
}
export default Wholeflash;