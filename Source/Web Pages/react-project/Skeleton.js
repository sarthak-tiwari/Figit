import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './Skeleton.css';

class Skeleton extends Component {
    render() {
      
      return (
    <div className="Skeleton">
          
        <div class="row" >
		    <div class="col-md-12">
			    
				<div class="col-md-6">
					
                 </div>
				<div class="col-md-6" >
					<span >Help   </span>
                    
					<span >About</span>
					<span class="glyphicon glyphicon-cog"></span>
				</div>
			
		</div>
	</div>
        

        <div id="row1" >
		<div class="col-md-3" >
			<div id= "x">
				<span class="glyphicon glyphicon-user" class="img-rounded"></span>
			    <span >Name</span>
			</div>
			<div id = "x1">
				
				<div class="row2" >
				   <div class="col-md-9">zzz</div>
				   
				</div>
				
				
				
			</div>
		</div>
		<div class="col-md-9">
		    <div class="row2" >
				   <div class="col-md-9">
						
				   </div>
				   
			</div>
			<div class="row2" >
				   <div class="col-md-9" >
						<div class="row2">
							   <div class="col-md-12" >
									<div id="chartContainer"></div>
								
							   </div>
							   




							   <div class="col-md-12">
									<div class="row3" >
										<div class="col-md-4">
										    <div class="card">
											  
											  <div>
												<h4 ><b>xx</b></h4> 
												<hr />
												<p>Architect & Engineer</p> 
											  </div>
											</div>
										</div>
										<div class="col-md-4">
										    <div class="card">
											  
											  <div>
												<h4 ><b>yy</b></h4> 
												<hr />
												<p>Architect & Engineer</p> 
											  </div>
											</div>
										</div>
										
									</div>
							   </div>
						</div>
						
				   </div>
				   <div class="col-md-3">
						<div class="row4" >
							<div class="col-md-12" ><div class="card">
								<div>
												<h4 ><b>Contributor</b></h4>
												<hr/>												
												 
											  </div>
							</div></div>
						</div>
				   </div>
			</div>
			
		</div>
		
	</div>
        </div>
        
      );
    }
  }
  
  export default Skeleton;