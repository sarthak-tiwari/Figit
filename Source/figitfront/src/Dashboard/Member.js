import React from 'react';
import './Member.css';
import Memberprofile from './Memberprofile';

class Member extends React.Component {

  constructor(props){

    super();

    this.state = {
      username: '',
      projectList : {},
      row: []
    }

    
  }

  componentWillMount(){
    var recievedMessage = this.props.username;
    this.setState({username: recievedMessage});
    this.fetchData();
  }

  settingProjectList(resp){
    //console.log(resp); 
    console.log(resp); 
    var rows =[];
    //if ((this.state.projectList) != {}){
    var members = {};
    members = resp;
      console.log("Members: " + {members});
      console.log("val: " + this.state.projectList);
     for (var j = 0; j<resp.length; j++){
         console.log(resp[j]['github_username']);
         console.log(resp[j]['github_profile_url']);
         console.log(resp[j]['github_image_url']);
          rows.push(<Memberprofile username={resp[j]['github_username']} 
                  gitURL={resp[j]['github_profile_url']} 
                  image={resp[j]['github_image_url']} />);
          console.log(rows[j]);
      }

      this.setState(function(state, rows) {
        return {
          row: rows
        };
      });

//  }
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
    console.log(this.state.projectList);
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
