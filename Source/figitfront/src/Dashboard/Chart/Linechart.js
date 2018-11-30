import React from 'react';
import {Line} from 'react-chartjs-2';
import './Linechart.css';

class Linechart extends React.Component {
	
    constructor(){

        super();

        this.state = {
          chartData:{},
          location:''
        }
        
        var test = new Object();
      }
    
      componentWillMount(){
        this.fetchData("commitCount");
      }

      fetchData(param){
        
        var url = '';
        var colName = '';
        var userName = 'commit_date';
        var location = '';
        if(param === "commitCount") {
          url = 'http://54.153.101.175:8000/dashboard/timeline/commit_count/' + this.props.reponame + '/';
          colName = 'commit_count';
          location = 'Commits per day';
        }
        else if(param === "pullReqCount") {
          url = 'http://54.153.101.175:8000/dashboard/timeline/pull_request_count/' + this.props.reponame + '/';
          colName = 'pull_request_count';
          userName = 'pull_request_date';
          location = 'Pull Requests per day';
        }

        fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'}
	      })
        .then(response => {return(response.json())})
        .then(response => {this.getChartData(response, colName, userName, location)})
      }
      
      getChartData(test, colName, userName, loc) {

        var xValues = [];
        var yValues = [];

        for(var i=0; i<test.length; i++) {
          xValues.push(test[i][userName]);
          yValues.push(test[i][colName]);
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
          },
          location:loc
        });
      }
	
	static defaultProps = {
		displayTitle:true,
		displayLegend: true,
		legendPosition:'right'
    }

	  render() {
		  return (
			<div class="linechart">
				<Line
					data={this.state.chartData}
					options={{
						title:{
						 display:this.props.displayTitle,
						 text:' '+this.state.location,
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
                    <form id="dataselect">
                        <input type="radio" name="valuetype" value="commit" onClick={(event)=>{this.fetchData('commitCount')}} id="commit" defaultchecked/> Commit Counts
                        <div class="pull">
                        <input type="radio" name="valuetype" value="pullrequest" onClick={(event)=>{this.fetchData('pullReqCount')}} id="pullrequest"/> Pull Requests
                        </div>
                    </form>
                    <br/>
                </div>
			</div>  
		  )
	  }
}

export default Linechart;