import React from 'react';
import "./Pojectlist.css";

render(){
	return(
		<div className = "projectlistdiv">
			<div className="projecthead">
        		<p>Projects</p><i className="fas fa-cog">
        	</div>
			<ul className = "projectlist">
				<li><i className="fas fa-code-branch"></i><span>ProjectName</span><a><i className="fas fa-minus-circle"></a></li>
			</ul>
		</div>
		)
}