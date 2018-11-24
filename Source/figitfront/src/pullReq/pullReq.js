import React from 'react';
//import './pullReq.css';
import Pin from './logo.png';
import {Bar, Line, Pie} from 'react-chartjs-2';

class PullRequest extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		  chartData:props.chartData
		}
	  }
	
	  static defaultProps = {
		displayTitle:true,
		displayLegend: true,
		legendPosition:'right',
		location:'City',
	  }

	  render() {
		  return (
			<div className="chart">
				
				<Line
					data={this.state.chartData}
					options={{
						title:{
						display:this.props.displayTitle,
						text:' '+this.props.location,
						fontSize:25
						},
						legend:{
						 display:this.props.displayLegend,
						 position:this.props.legendPosition
						},
					}}
        		/>
			</div>  
		  )
	  }
}

export default PullRequest;