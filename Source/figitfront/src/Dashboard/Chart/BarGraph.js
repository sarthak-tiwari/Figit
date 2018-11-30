import React from 'react';
import {Bar} from 'react-chartjs-2';
import './BarGraph.css';

class BarGraph extends React.Component {
	
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
        var username = 'committer_name';
        var detailname = 'commit_details';
        var countname = 'commit_count';
        var location = '';
        if(param === "commitCount") {
          url = 'http://54.153.101.175:8000/dashboard/bargraph/commit_count/' + this.props.reponame + '/';
          location = 'Commit contribution per week';
        }
        else if(param === "pullReqCount") {
            url = 'http://54.153.101.175:8000/dashboard/bargraph/pull_request_count/' + this.props.reponame + '/';
            location = 'Pull Request contribution per week';
            username = 'requester_name';
            detailname = 'request_details';
            countname = 'request_count';
        }

        fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'}
	      })
        .then(response => {return(response.json())})
        .then(response => {this.getChartData(response, username, detailname, countname, location)})
      }

      getChartData(test, username, detailname, countname, loc) {
        
      var commiterName = [];
      var xValuesDict = {};
      var yValuesDict = {};
      
      // Prepare the Data as per the JSON value
      console.log(test);
      for(var i=0; i<test.length; i++) {
          var xValues = [];
          var yValues = [];
          commiterName.push(test[i][username]);
          for (var j = 0; j<test[i][detailname].length; j++) {
            xValues.push(test[i][detailname][j]['week_name']);
            yValues.push(test[i][detailname][j][countname]);
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
			<div class="bargraph">
				<Bar
					data={this.state.chartData}
					options={{
						title:{
						 display:this.props.displayTitle,
						 text:this.state.location,
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
              <input type="radio" name="valuetype" value="commit" onClick={(event)=>{this.fetchData('commitCount')}} id="commit_bar" defaultChecked/> Commit Counts
              <div class="pull_bar">
                 <input type="radio" name="valuetype" value="pullrequest" onClick={(event)=>{this.fetchData('pullReqCount')}} id="pullrequest_bar"/> Pull Requests
              </div>
            </form>
            <br/>
        </div>
      </div>  
		  )
	  }
}

export default BarGraph;