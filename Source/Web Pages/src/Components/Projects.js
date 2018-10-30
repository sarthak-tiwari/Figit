import React, { Component } from 'react';
import './Project.css';
import Displaycard from './Displaycard'
import Piechart from './Piechart';

class Projects extends Component {
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
    <Displaycard photo = "https://i.pinimg.com/236x/e2/72/e4/e272e4c7495706cf18f565e2c0d36078--baby-harry-potter-rainbow-baby.jpg" emailid = "yrdesai@asu.edu"/>
  </p>
 <p><Displaycard photo = "https://i.pinimg.com/236x/e2/72/e4/e272e4c7495706cf18f565e2c0d36078--baby-harry-potter-rainbow-baby.jpg" emailid = "pchugh1@asu.edu"/></p>
<p><Displaycard photo = "https://i.pinimg.com/236x/e2/72/e4/e272e4c7495706cf18f565e2c0d36078--baby-harry-potter-rainbow-baby.jpg" emailid = "bpanda1@asu.edu"/></p>                    
<p>
    <Displaycard photo = "https://i.pinimg.com/236x/e2/72/e4/e272e4c7495706cf18f565e2c0d36078--baby-harry-potter-rainbow-baby.jpg" emailid = "yrdesai@asu.edu"/>
  </p>
  <p>
    <Displaycard photo = "https://i.pinimg.com/236x/e2/72/e4/e272e4c7495706cf18f565e2c0d36078--baby-harry-potter-rainbow-baby.jpg" emailid = "yrdesai@asu.edu"/>
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
