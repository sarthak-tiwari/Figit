import React from 'react';
import './Dashheader.css';
import Pin from './logo.png';
import { Link } from 'react-router-dom';

class Dashheader extends React.Component {
    
    /*const flashcard = (data) => { */
    render(){
    return( 
        <div class="topnav">
        <a class="active" href="C:\Users\desai\Desktop\bootland.html"><img src={Pin} alt="Smiley face"/></a>
        <div class="topnav-right">
          <Link to="/help">Help</Link>
          <Link to="/about">About</Link>
          <a href="#about"><i class="fas fa-cogs"></i></a>
          <a href="#about"><i class="fas fa-sign-out-alt"></i></a>
        </div>
      </div>
      
         );  
    }
}

export default Dashheader;



