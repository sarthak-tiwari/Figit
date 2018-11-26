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
          {
              "committer_name": "BharatG295",
              "commit_details": [
                  {
                      "week_name": "WEEK 38",
                      "commit_count": 6
                  },
                  {
                      "week_name": "WEEK 39",
                      "commit_count": 13
                  },
                  {
                      "week_name": "WEEK 40",
                      "commit_count": 2
                  },
                  {
                      "week_name": "WEEK 41",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 42",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 43",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 44",
                      "commit_count": 1
                  },
                  {
                      "week_name": "WEEK 45",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 46",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 47",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 48",
                      "commit_count": 0
                  }
              ]
          },
          {
              "committer_name": "bpanda1",
              "commit_details": [
                  {
                      "week_name": "WEEK 38",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 39",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 40",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 41",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 42",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 43",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 44",
                      "commit_count": 2
                  },
                  {
                      "week_name": "WEEK 45",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 46",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 47",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 48",
                      "commit_count": 0
                  }
              ]
          },
          {
              "committer_name": "pchugh1",
              "commit_details": [
                  {
                      "week_name": "WEEK 38",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 39",
                      "commit_count": 1
                  },
                  {
                      "week_name": "WEEK 40",
                      "commit_count": 7
                  },
                  {
                      "week_name": "WEEK 41",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 42",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 43",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 44",
                      "commit_count": 7
                  },
                  {
                      "week_name": "WEEK 45",
                      "commit_count": 1
                  },
                  {
                      "week_name": "WEEK 46",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 47",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 48",
                      "commit_count": 0
                  }
              ]
          },
          {
              "committer_name": "sarthak-tiwari",
              "commit_details": [
                  {
                      "week_name": "WEEK 38",
                      "commit_count": 5
                  },
                  {
                      "week_name": "WEEK 39",
                      "commit_count": 7
                  },
                  {
                      "week_name": "WEEK 40",
                      "commit_count": 1
                  },
                  {
                      "week_name": "WEEK 41",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 42",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 43",
                      "commit_count": 2
                  },
                  {
                      "week_name": "WEEK 44",
                      "commit_count": 3
                  },
                  {
                      "week_name": "WEEK 45",
                      "commit_count": 4
                  },
                  {
                      "week_name": "WEEK 46",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 47",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 48",
                      "commit_count": 0
                  }
              ]
          },
          {
              "committer_name": "shefaliAJ7",
              "commit_details": [
                  {
                      "week_name": "WEEK 38",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 39",
                      "commit_count": 1
                  },
                  {
                      "week_name": "WEEK 40",
                      "commit_count": 4
                  },
                  {
                      "week_name": "WEEK 41",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 42",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 43",
                      "commit_count": 1
                  },
                  {
                      "week_name": "WEEK 44",
                      "commit_count": 8
                  },
                  {
                      "week_name": "WEEK 45",
                      "commit_count": 1
                  },
                  {
                      "week_name": "WEEK 46",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 47",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 48",
                      "commit_count": 0
                  }
              ]
          },
          {
              "committer_name": "yrdesai",
              "commit_details": [
                  {
                      "week_name": "WEEK 38",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 39",
                      "commit_count": 3
                  },
                  {
                      "week_name": "WEEK 40",
                      "commit_count": 13
                  },
                  {
                      "week_name": "WEEK 41",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 42",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 43",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 44",
                      "commit_count": 6
                  },
                  {
                      "week_name": "WEEK 45",
                      "commit_count": 1
                  },
                  {
                      "week_name": "WEEK 46",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 47",
                      "commit_count": 0
                  },
                  {
                      "week_name": "WEEK 48",
                      "commit_count": 0
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
          for (var j = 0; j<test[i]['commit_details'].length; j++) {
            xValues.push(test[i]['commit_details'][j]['week_name']);
            yValues.push(test[i]['commit_details'][j]['commit_count']);
          }   
          xValuesDict[i] = xValues;
          yValuesDict[i] = yValues;
  
      }
  
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
          dataSetValues.push(dict);
      }
        
      var chartDataArr = [];
      for (var i = 0; i < commiterName.length; i++){
          var chartDataValues = {};
          chartDataValues['labels'] = commiterName[i];
          chartDataArr.push(commiterName[i]);
      }
  
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

        <div class="select">
            <form id="dataselect_bar" onClick= {this.newClick}>
              <input type="radio" name="valuetype" value="commit" id="commit_bar" defaultChecked/> Commits
              <div class="pull_bar">
                 <input type="radio" name="valuetype" value="pullrequest" id="pullrequest_bar"/> Pull Requests
              </div>
            </form>
            <br/>
            
            <form id="commitselect_bar" >
              <input type="radio" name="committype" value="count" defaultChecked/> Commits counts<br/>
              <input type="radio" name="committype" value="adds"/> No. of additions<br/>
              <input type="radio" name="committype" value="dels"/> No. of deletions<br/>
              <input type="radio" name="committype" value="filmod"/> Files modified<br/>
            </form>
                    
            <form id="pullreqselect_bar" >
              <input type="radio" name="pullreqtype" value="count" defaultChecked/> Count<br/>
              <input type="radio" name="pullreqtype" value="raised"/> Raised<br/>
              <input type="radio" name="pullreqtype" value="reviewed"/> Reviewed<br/>
              <br/>
            </form>

        </div>
      </div>  
		  )
	  }
}

export default BarGraph;