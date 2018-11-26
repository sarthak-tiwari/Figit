import React from 'react';
import './Projectlist.css';
import Singleproject from './Singleproject';

class Projectlist extends React.Component {

	constructor(props){

        super();

        this.state = {
		  username: '',
		  projectList : {}
		}
		
      }
    
    componentWillMount(){
		var recievedMessage = this.props.username;
		this.setState({username: recievedMessage});
		this.fetchData();
	}
	
	settingProjectList(resp){
		this.setState({projectList: resp});
	}

	fetchData(){
        
        var url = '';
        url = 'http://localhost:8000/dashboard/repos/' + this.props.username + '/';

        fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'}
	      })
        .then(response => {return(response.json())})
        .then(response => { this.settingProjectList(response);
		});
    }

	render(){
		
	var rows =[];
	
	if ((this.state.projectlist) != {}){
		var projectlists = this.state.projectList;
			
		for (var j = 0; j<projectlists.length; j++){
			console.log(projectlists[j]['github_repository']);
			rows.push(<Singleproject project={projectlists[j]['github_repository']}/>);
		}

		return( <div> {rows} </div> );

	}
	//console.log(a['repository_url']);
	//alert(projectlists[0]['github_repository']);

	else{
		return( <div>
					
						</div>);
		}
	}
}
export default Projectlist;
