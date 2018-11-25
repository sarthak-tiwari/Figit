import React from 'react';
import './Member.css';
import Memberprofile from './Memberprofile';

class Member extends React.Component {

    state = {
        myprofile: [
          { photo:'http://admission.igntuonline.in/dist/img/UserImage.jpg' , emailid:'yrdesai@asu.edu', gitLink:'https://www.google.com'},
          { photo:'http://admission.igntuonline.in/dist/img/UserImage.jpg' , emailid:'yrdesai@asu.edu', gitLink:'https://www.yahoo.com'},
          { photo:'http://admission.igntuonline.in/dist/img/UserImage.jpg' , emailid:'yrdesai@asu.edu', gitLink:'https://www.google.com'},
          { photo:'http://admission.igntuonline.in/dist/img/UserImage.jpg' , emailid:'yrdesai@asu.edu', gitLink:'https://www.rediff.com'},
          { photo:'http://admission.igntuonline.in/dist/img/UserImage.jpg' , emailid:'yrdesai@asu.edu', gitLink:'https://www.facebook.com'},
          { photo:'http://admission.igntuonline.in/dist/img/UserImage.jpg' , emailid:'yrdesai@asu.edu', gitLink:'https://www.google.com'}
        ]
      }

  render() {
    return (
<div className="Projects">
         <div class="card" id ="style-1">
             <div class="memberh4">
               
             <h4><b>Contributors</b></h4>
																			
<div class="memberp">         
<p>
    <Memberprofile photo = {this.state.myprofile[0].photo} emailid = {this.state.myprofile[0].emailid} gitLink = {this.state.myprofile[0].gitLink}/>
  </p>
 <p><Memberprofile photo = {this.state.myprofile[1].photo} emailid = {this.state.myprofile[1].emailid} gitLink = {this.state.myprofile[1].gitLink}/></p>
<p><Memberprofile photo = {this.state.myprofile[2].photo} emailid = {this.state.myprofile[2].emailid} gitLink = {this.state.myprofile[2].gitLink}/></p>                    
<p>
    <Memberprofile photo = {this.state.myprofile[3].photo} emailid = {this.state.myprofile[3].emailid} gitLink = {this.state.myprofile[3].gitLink}/>
  </p>
  <p>
    <Memberprofile photo = {this.state.myprofile[4].photo} emailid = {this.state.myprofile[4].emailid} gitLink = {this.state.myprofile[4].gitLink}/>
  </p>
  <p>
  <Memberprofile photo = {this.state.myprofile[5].photo} emailid = {this.state.myprofile[5].emailid} gitLink = {this.state.myprofile[5].gitLink}/> 
  
  </p>
  </div> 

  </div>
</div>


</div>
    );
  }
}
export default Member;
