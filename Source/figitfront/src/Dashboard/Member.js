import React from 'react';
import './Member.css';
import Memberprofile from './Memberprofile';

class Member extends React.Component {

  constructor(props){

    super();

    this.state = {
      username: '',
      row: []
    }

    
  }

  componentWillMount(){
    var recievedMessage = this.props.username;
    //this.setState({username: recievedMessage});
    this.fetchData();
  }

  settingProjectList(resp){
    var rows =[];
    //if ((this.state.projectList) != {}){
    var members = {};
    members = resp;
     for (var j = 0; j<resp.length; j++){
          rows.push(<Memberprofile username={resp[j]['github_username']} 
                  gitURL={resp[j]['github_profile_url']} 
                  image={resp[j]['github_image_url']} />);
      }

      this.setState({ row: rows });
}

  fetchData() {
        
    var url = '';
    url = 'http://localhost:8000/dashboard/repos_collaborators/ScrumDevils-SER_515/';

    fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'}
    })
    .then(response => { return(response.json())})
    .then(response => { this.settingProjectList(response);
    })
  }

  render(){
    console.log(this.state.row);
      return( <div class="contributorlist card">
                <div class="contriheading">
                  <h3>Contributors</h3>
                </div>
                <div>
                  {this.state.row}
                </div>
              </div>);
    }
}    

export default Member;
