import React from 'react';
//import './pullReq.css';
import {Line} from 'react-chartjs-2';
import './Linechart.css';
import $ from 'jquery';

class Linechart extends React.Component {
	
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
      
      newClick(){
        if(document.getElementById('commit').checked) {
            document.getElementById('commitselect').style.display = "block";
            document.getElementById('pullreqselect').style.display = "none";
         } else if (document.getElementById('pullrequest').checked) {
           document.getElementById('commitselect').style.display = "none";
           document.getElementById('pullreqselect').style.display = "block";
         }
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
    
    show1() {
        document.getElementById('commitselect').style.display ='block';
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
                <div class="select">
                    <form id="dataselect" onClick= {this.newClick}>
                        <input type="radio" name="valuetype" value="commit" id="commit" checked />Commits
                        <div id="pull">
                        <input type="radio" name="valuetype" value="pullrequest" id="pullrequest"/>Pull Requests
                        </div>
                    </form>
                    <br/>
                    
                    <form id="commitselect">
                        <input type="radio" name="committype" value="count"/>Commits counts<br/>
                        <input type="radio" name="committype" value="adds"/>No. of additions<br/>
                        <input type="radio" name="committype" value="dels"/>No. of deletions<br/>
                        <input type="radio" name="committype" value="filmod"/>Files modified<br/>
                    </form>
                    

                    <form id="pullreqselect" >
                        <input type="radio" name="pullreqtype" value="count"/>Count<br/>
                        <input type="radio" name="pullreqtype" value="raised"/>raised<br/>
                        <input type="radio" name="pullreqtype" value="reviewed"/>reviewed<br/>
                    </form>

                </div>
 
			</div>  
		  )
	  }
}

export default Linechart;