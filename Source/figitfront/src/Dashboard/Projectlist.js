import React from 'react';
import './Projectlist.css';
import Singleproject from './Singleproject';

class Projectlist extends React.Component {

	state = {
		Projectlists: [
		  { project:'ProjectName1'},
		  { project:'ProjectName2'},
		  { project:'ProjectName3'}
		]
	  }
	 
	
	  render() {
		return( <div class = "projectlistdiv">
				<div class="projecthead">
					<p>Projects<i class="fas fa-cog"></i></p>
				</div>
				<ul class = "projectlist">
					<Singleproject project={this.state.Projectlists[0].project}></Singleproject>
					<Singleproject project={this.state.Projectlists[1].project}></Singleproject>
					<Singleproject project={this.state.Projectlists[2].project}></Singleproject>
				</ul>
			</div>);
}
}
export default Projectlist;
