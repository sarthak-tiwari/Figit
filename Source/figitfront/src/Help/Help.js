import React from 'react';
import './Help.css';
import Pin from './logo.png';
import { Link } from "react-router-dom";

class Help extends React.Component {
 
    render() {
    return( 
            <div>
                <div class="topnav">
  		<Link class="active" to="/"><img src={Pin} alt="Smiley face"/></Link>
  		<div class="topnav-right">
			<Link to="/help">Help</Link>
        	<Link to="/about">About</Link>
  		</div>
  	</div>
  	<div class="d-flex justify-content-center">
  		<div class="header">
  			<p>Help</p>
    	</div>
	</div>

	<div class="container">
  		<div class="jumbotron">
    		<h3><i class="fas fa-question-circle"></i> How to add a new repository?</h3>      
    		<p>For Project analysis, you need to provide the complete URL of the GitHub Repository. After typing the repository link in the textbox click on the 'Go to Dashboard' button below the textbox. The repository will be added to the list. You need to add atleast one repository for Project Analysis. “Go to Dashboard” will be enabled when you add atleast one Github repository to the list. If you wish to add multiple repository, you can cliick on “Add Another button.

			</p>

    		<h3><i class="fas fa-question-circle"></i> How to delete a repository?</h3>
    		<p>Inorder to delete the repository from the list, hover your mouse to the right and click on  delete button.</p>

    		<h3><i class="fas fa-question-circle"></i> How to change the graph?</h3>
    		<p>The Project dashboard page provides an option to change the type of graph. You can either selct a pie chart or a linear graph from the top right corner of the project header in the dashboard.</p>
		</div> 
	</div>
            </div>
         );  
    }
}
export default Help;