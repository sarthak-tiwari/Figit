import React from 'react';
//import './pullReq.css';
import Pin from './logo.png';
import {Line} from 'react-chartjs-2';
import './Chart.css';

class LineChart extends React.Component {
	/*constructor(props){
		super(props);
		this.state = {
		  chartData:props.chartData
		}
    }*/
    
    constructor(){
        super();
        this.state = {
          chartData:{}
        }
        var test = new Object();
      }
    
      componentWillMount(){
        this.getChartData();
      }
    
      getChartData() {
        var test = [
          [['x1', "Jan 2 2018"], ['x2', 100]],
          [['x1', "Sep 4 2018"], ['x2', 13]],
          [['x1', "Nov 13 2018"], ['x2', 0]],
          [['x1', "Dec 13 2018"], ['x2', 15]]
        ];
        // Ajax calls here
        var xValues = [];
        var yValues = [];
        for(var i=0; i<test.length; i++) {
            xValues.push(test[i][0][1]);
            yValues.push(test[i][1][1]);
        }
        var yAxisName = "Count";
        var backgroundColor = [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
        this.setState({
          
          chartData:{
            labels: xValues,
            datasets:[
              {
                label:yAxisName,
                data: yValues,
                default: 0,
                backgroundColor: 'blue',
                fill:false,
                lineTension:0,
                stacked:true,
                fillGapsWithZero: true
              }
            ]
          }
        });
      }
	
	static defaultProps = {
		displayTitle:true,
		displayLegend: true,
		legendPosition:'right',
	    location:'City',
    }
    


	  render() {
		  return (
			<div class="linechart">
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
						scales: {
							xAxes: [ {
								type: 'time',
								time: {
									unit: 'week'
								},
								ticks: {
									min:0
							},
							distribution:'linear'
							}],
							yAxes: [{
                                ticks: {
								    min:0,
									source:'labels'
								},
                            }]
						},
					}}
        		/>
			</div>  
		  )
	  }
}

export default LineChart;