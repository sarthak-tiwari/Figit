import React from 'react';
import {Bar} from 'react-chartjs-2';
import './Chart.css';

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
    
    getChartData() {
      /*var test = [
          [['x1', "Jan 2 2018"], ['x2', 10]],
          [['x1', "Jan 8 2018"], ['x2', 13]],
          [['x1', "Nov 13 2018"], ['x2', 0]],
          [['x1', "Dec 13 2018"], ['x2', 15]]
      ];*/
        
      var test = [
        {
            "committer_name": "BharatG295",
            "commit_details": [
                {
                    "commit_date": "2018-09-21",
                    "commit_count": 5
                },
                {
                    "commit_date": "2018-09-23",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-09-24",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-09-26",
                    "commit_count": 3
                },
                {
                    "commit_date": "2018-09-28",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-09-30",
                    "commit_count": 8
                },
                {
                    "commit_date": "2018-10-01",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-10-03",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-10-29",
                    "commit_count": 1
                }
            ]
        },
        {
            "committer_name": "bpanda1",
            "commit_details": [
                {
                    "commit_date": "2018-11-04",
                    "commit_count": 2
                }
            ]
        },
        {
            "committer_name": "pchugh1",
            "commit_details": [
                {
                    "commit_date": "2018-09-30",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-10-01",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-10-03",
                    "commit_count": 4
                },
                {
                    "commit_date": "2018-10-05",
                    "commit_count": 2
                },
                {
                    "commit_date": "2018-10-29",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-10-30",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-10-31",
                    "commit_count": 4
                },
                {
                    "commit_date": "2018-11-02",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-11-05",
                    "commit_count": 1
                }
            ]
        },
        {
            "committer_name": "sarthak-tiwari",
            "commit_details": [
                {
                    "commit_date": "2018-09-06",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-09-16",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-09-23",
                    "commit_count": 5
                },
                {
                    "commit_date": "2018-09-24",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-09-26",
                    "commit_count": 3
                },
                {
                    "commit_date": "2018-09-30",
                    "commit_count": 3
                },
                {
                    "commit_date": "2018-10-01",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-10-28",
                    "commit_count": 2
                },
                {
                    "commit_date": "2018-10-30",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-11-01",
                    "commit_count": 2
                },
                {
                    "commit_date": "2018-11-05",
                    "commit_count": 4
                }
            ]
        },
        {
            "committer_name": "shefaliAJ7",
            "commit_details": [
                {
                    "commit_date": "2018-09-30",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-10-01",
                    "commit_count": 2
                },
                {
                    "commit_date": "2018-10-02",
                    "commit_count": 2
                },
                {
                    "commit_date": "2018-10-28",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-10-29",
                    "commit_count": 4
                },
                {
                    "commit_date": "2018-11-02",
                    "commit_count": 2
                },
                {
                    "commit_date": "2018-11-03",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-11-04",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-11-05",
                    "commit_count": 1
                }
            ]
        },
        {
            "committer_name": "yrdesai",
            "commit_details": [
                {
                    "commit_date": "2018-09-27",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-09-30",
                    "commit_count": 2
                },
                {
                    "commit_date": "2018-10-01",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-10-02",
                    "commit_count": 2
                },
                {
                    "commit_date": "2018-10-03",
                    "commit_count": 2
                },
                {
                    "commit_date": "2018-10-04",
                    "commit_count": 4
                },
                {
                    "commit_date": "2018-10-05",
                    "commit_count": 4
                },
                {
                    "commit_date": "2018-10-29",
                    "commit_count": 2
                },
                {
                    "commit_date": "2018-10-31",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-11-03",
                    "commit_count": 1
                },
                {
                    "commit_date": "2018-11-04",
                    "commit_count": 2
                },
                {
                    "commit_date": "2018-11-05",
                    "commit_count": 1
                }
            ]
        }
    ];
      
      var commiterName = [];
      var xValuesDict = {};
      var yValuesDict = {};
      // Prepare the Data as per the JSON value
      
      for(var i=0; i<test.length; i++) {
        var xValues = [];
        var yValues = [];
        commiterName.push(test[i]['committer_name']);
        console.log("len: " + test[i]['commit_details'].length);
        for (var j = 0; j<test[i]['commit_details'].length; j++) {
          xValues.push(test[i]['commit_details'][j]['commit_date']);
          yValues.push(test[i]['commit_details'][j]['commit_count']);
        }   
        xValuesDict[i] = xValues;
        yValuesDict[i] = yValues;

      }

      console.log(commiterName[0]);
      console.log(xValuesDict[0]);
      console.log(yValuesDict[0]);

      console.log(commiterName[1]);
      console.log(xValuesDict[1]);
      console.log(yValuesDict[1]);
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
      // Build the chartData as per contributer list
      var dataSetValues = [];
      var chartXValues = [];
      for (var i = 0; i < commiterName.length; i++) {
        var dict = {};
        dict['label'] =commiterName[i];
        dict['data'] = yValuesDict[i];
        dict['default'] = 0;
        dict['backgroundColor'] = backgroundColor[i];
        dict['fill'] = false;
        dict['lineTension'] = 0;
        dict['stacked'] = true;
        dict['fillGapsWithZero'] = true;
        console.log(dict);
        dataSetValues.push(dict);
      }
      
      var chartDataArr = [];
      for (var i = 0; i < commiterName.length; i++){
        var chartDataValues = {};
        chartDataValues['labels'] = commiterName[i];
        chartDataArr.push(commiterName[i]);
      }

      console.log(chartDataArr);
        this.setState({
          chartData:{
            labels: xValues,
            datasets: dataSetValues
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
			</div>  
		  )
	  }
}

export default BarGraph;