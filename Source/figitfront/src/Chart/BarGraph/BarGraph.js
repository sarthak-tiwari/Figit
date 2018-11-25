import React from 'react';
import {Bar} from 'react-chartjs-2';
import './BarGraph.css';

class BarGraph extends React.Component {
	
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
        if(document.getElementById('commit_bar').checked) {
            document.getElementById('commitselect_bar').style.display = "block";
            document.getElementById('pullreqselect_bar').style.display = "none";
         } 
         else if (document.getElementById('pullrequest_bar').checked) {
           document.getElementById('commitselect_bar').style.display = "none";
           document.getElementById('pullreqselect_bar').style.display = "block";
         }
      }

      getChartData() {
        var test = [
          [['x1', "Jan 2 2018"], ['x2', 10]],
          [['x1', "Jan 8 2018"], ['x2', 13]],
          [['x1', "Nov 13 2018"], ['x2', 0]],
          [['x1', "Dec 13 2018"], ['x2', 15]]
        ];

        
        
        // Ajax calls here
        var xValues = [];
        var yValues1 = [4,5,9,12];
        var yValues = [];
        for(var i=0; i<test.length; i++) {
            xValues.push(test[i][0][1]);
            yValues.push(test[i][1][1]);
        }
        var yAxisName = "Commit";
        var yAxisName1 = "Pull";
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
                backgroundColor: 'pink',
                fill:false,
                lineTension:0,
                stacked:true,
                fillGapsWithZero: true,
                barThickness:'flex'

              },
              {
                label:yAxisName1,
                data: yValues1,
                default: 0,
                backgroundColor: 'blue',
                fill:false,
                lineTension:0,
                stacked:true,
                fillGapsWithZero: true,
                barThickness:'flex'
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
			<div class="bargraph">
				<Bar
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
              xAxes: [{
                  stacked: true
              }],
              yAxes: [{
                  stacked: true
              }]
          }
					}}
        		/>

                 <div class="select">
                    <form id="dataselect_bar" onClick= {this.newClick}>
                        <input type="radio" name="valuetype" value="commit" id="commit_bar" defaultChecked/>Commits
                        <div class="pull_bar">
                        <input type="radio" name="valuetype" value="pullrequest" id="pullrequest_bar"/>Pull Requests
                        </div>
                    </form>
                    <br/>
                    
                    <form id="commitselect_bar">
                        <input type="radio" name="committype" value="count" defaultChecked/>Commits counts<br/>
                        <input type="radio" name="committype" value="adds"/>No. of additions<br/>
                        <input type="radio" name="committype" value="dels"/>No. of deletions<br/>
                        <input type="radio" name="committype" value="filmod"/>Files modified<br/>
                    </form>
                    

                    <form id="pullreqselect_bar" >
                        <input type="radio" name="pullreqtype" value="count" defaultChecked/>Count<br/>
                        <input type="radio" name="pullreqtype" value="raised"/>raised<br/>
                        <input type="radio" name="pullreqtype" value="reviewed"/>reviewed<br/>
                    </form>

                </div>

			</div>  
		  )
	  }
}

export default BarGraph;