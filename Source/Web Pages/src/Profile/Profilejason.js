import React from 'react';
import Profile from './Profile';

class Profilejason extends React.Component {

    state = {
      profiles: [
        { photo:'http://admission.igntuonline.in/dist/img/UserImage.jpg' , emailid:'yrdesai@asu.edu'}
      ]
    }
  
    render() {
      return(
        <div>
            <Profile photo={this.state.profiles[0].photo} emailid={this.state.profiles[0].emailid}></Profile>
        </div>
      );
    }
  }
  
  export default Profilejason;