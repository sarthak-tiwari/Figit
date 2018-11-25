import React from 'react';
import './Dashheader.css';
import Pin from './logo.png';

class Dashheader extends React.Component {
    
    /*const flashcard = (data) => { */
    render(){
    return( 
        <div class="topnav">
        <a class="active" href="C:\Users\desai\Desktop\bootland.html"><img src={Pin} alt="Smiley face"/></a>
        <div class="topnav-right">
          <a href="#search">Help</a>
          <a href="#about">About</a>
          <a href="#about"><i class="fas fa-cogs"></i></a>
          <a href="#about"><i class="fas fa-sign-out-alt"></i></a>
        </div>
      </div>
      
         );  
    }
}

export default Dashheader;



