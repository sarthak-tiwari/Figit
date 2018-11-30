import React from 'react';
import {Pie} from 'react-chartjs-2';
import './PieChart.css';

class PieChart extends React.Component {
	
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
    
      newClick(){
        if(document.getElementById('commit_pie').checked) {
            document.getElementById('commitselect_pie').style.display = "block";
            document.getElementById('pullreqselect_pie').style.display = "none";
         } 
         else if (document.getElementById('pullrequest_pie').checked) {
           document.getElementById('commitselect_pie').style.display = "none";
           document.getElementById('pullreqselect_pie').style.display = "block";
         }
      }

      fetchData(param){
        
        var url = '';
        var colName = '';
        var userName = 'committer_name';
        var location = '';
        if(param === "commitCount") {
          url = 'http://54.153.101.175:8000/dashboard/commit_count/' + this.props.reponame + '/';
          colName = 'commit_count';
          location = 'Commit Contributions';
        }
        else if(param === "commitAddCount") {
          url = 'http://54.153.101.175:8000/dashboard/commit/additions_count/' + this.props.reponame + '/';
          colName = 'additions_count';
          location = 'Number of Additions in Commits';
        }
        else if(param === "commitDelCount") {
          url = 'http://54.153.101.175:8000/dashboard/commit/deletions_count/' + this.props.reponame + '/';
          colName = 'deletions_count';
          location = 'Number of Deletions in Commits';
        }
        else if(param === "commitModCount") {
          url = 'http://54.153.101.175:8000/dashboard/commit/files_modified_count/' + this.props.reponame + '/';
          colName = 'modified_count';
          location = 'Number of Files Modified in Commits';
        }
        else if(param === "pullReqCount") {
          url = 'http://54.153.101.175:8000/dashboard/pull_requests/raise_count/' + this.props.reponame + '/';
          colName = 'raise_count';
          userName = 'requester_login';
          location = 'Number of Pull Requests Raised';
        }
        else if(param === "pullRevCount") {
          url = 'http://54.153.101.175:8000/dashboard/pull_requests/review_count/' + this.props.reponame + '/';
          colName = 'review_count';
          userName = 'reviewer_login';
          location = 'Number of Pull Requests Reviewed';
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
                backgroundColor:backgroundColor,
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
		    legendPosition:'right',
      }
    


	  render() {
		  return (
			<div class="piechart">
				<Pie
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
					}}
        		/>

                <div class="select">
                    <form id="dataselect_bar" onClick= {this.newClick}>
                        <input type="radio" name="valuetype" value="commit" id="commit_pie" defaultChecked/> Commits
                        <div class="pull_pie">
                        <input type="radio" name="valuetype" value="pullrequest" id="pullrequest_pie"/> Pull Requests
                        </div>
                    </form>
                    <br/>
                    
                    <form id="commitselect_pie">
                        <input type="radio" name="committype" value="count" onClick={(event)=>{this.fetchData('commitCount')}} defaultChecked/> Commits counts<br/>
                        <input type="radio" name="committype" value="adds" onClick={(event)=>{this.fetchData('commitAddCount')}}/> No. of additions<br/>
                        <input type="radio" name="committype" value="dels" onClick={(event)=>{this.fetchData('commitDelCount')}}/> No. of deletions<br/>
                        <input type="radio" name="committype" value="filmod" onClick={(event)=>{this.fetchData('commitModCount')}}/> Files modified<br/>
                    </form>
                    

                    <form id="pullreqselect_pie" >
                        <input type="radio" name="pullreqtype" value="raised" onClick={(event)=>{this.fetchData('pullReqCount')}}/> Raised<br/>
                        <input type="radio" name="pullreqtype" value="reviewed" onClick={(event)=>{this.fetchData('pullRevCount')}}/> Reviewed<br/>
                        <br/>
                    </form>

                </div>
			</div>  
		  )
	  }
}

export default PieChart;