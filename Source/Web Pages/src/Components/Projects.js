import React, { Component } from 'react';
import './Project.css';
import Displaycard from './Displaycard'
import Piechart from './Piechart';

class Projects extends Component {


    state = {
        myprofile: [
          { photo:'https://i.pinimg.com/236x/e2/72/e4/e272e4c7495706cf18f565e2c0d36078--baby-harry-potter-rainbow-baby.jpg'},
          { emailid: ['yrdesai@asu.edu','bpanda1@asu.edu','pchugh1@asu.edu','sanand22@asu.edu','bgoel1@asu.edu','stiwar22@asu.edu']}
        ]
      }

  render() {
    return (
<div className="Projects">
<div className="col-md-3">
    <div class="col-md-12">
         <div class="card"  id="style-1" >
             <div >
               
             <h4><b>Contributors</b></h4>
							<hr></hr>														
                
<p>
    <Displaycard photo = {this.state.myprofile[0].photo} emailid = {this.state.myprofile[1].emailid[0]}/>
  </p>
 <p><Displaycard photo = {this.state.myprofile[0].photo} emailid = {this.state.myprofile[1].emailid[1]}/></p>
<p><Displaycard photo = {this.state.myprofile[0].photo} emailid = {this.state.myprofile[1].emailid[2]}/></p>                    
<p>
    <Displaycard photo = {this.state.myprofile[0].photo} emailid = {this.state.myprofile[1].emailid[3]}/>
  </p>
  <p>
    <Displaycard photo = {this.state.myprofile[0].photo} emailid = {this.state.myprofile[1].emailid[4]}/>
  </p>
  <p>
    <Displaycard photo = {this.state.myprofile[0].photo} emailid = {this.state.myprofile[1].emailid[5]}/>
  </p>

             </div>
         </div>
    </div>
</div>


</div>
    );
  }
}
export default Projects;
