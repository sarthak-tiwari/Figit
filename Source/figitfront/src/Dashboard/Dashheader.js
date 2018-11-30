import React from 'react';
import './Dashheader.css';
import Pin from './logo.png';
import { Redirect, Link } from 'react-router-dom';

class Dashheader extends React.Component {
    
    /*const flashcard = (data) => { */
    render(){
    return( 
        <div class="topnav">
        <Link class="active" to="/"><img src={Pin} alt="Smiley face"/></Link>
        <div class="topnav-right">
          <Link to="/help">Help</Link>
          <Link to="/about">About</Link>
          <Link to="/addrepository"><i class="fas fa-cogs"></i></Link>
          <Link to="/"><i class="fas fa-sign-out-alt"></i></Link>
        </div>
      </div>
      
         );  
    }
}

export default Dashheader;



