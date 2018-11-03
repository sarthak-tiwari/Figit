import React, { Component } from 'react';
import './Displaycard.css';

function Displaycard(data) {
    return(
      <div className = "profile">
        <div className= "photo1">
          <img src = {data.photo} alt="Bijayalaxmi"/>
          <span>{data.emailid}</span>
        </div>
      </div> 
    );
  }
  export default Displaycard;
