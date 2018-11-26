import React from 'react';
import './Memberprofile.css';

const Memberprofile = (props) => {
    return (
    <div class="memberlink">
    <a href={props.gitURL}>
    <div className = "profile1">
                <div className= "photo2">
                    <img src = {props.image} alt="photo"/>
                    <span id="contriname">{props.username}</span>
                </div>
            </div> 
    </a>
    </div>
    )};
export default Memberprofile;