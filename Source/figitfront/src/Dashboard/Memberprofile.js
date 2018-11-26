import React from 'react';
import './Memberprofile.css';

const Memberprofile = (props) => {
    return (
    <div class="memberlink">
    <a href={props.gitLink}>
    <div className = "profile1">
                <div className= "photo2">
                    <img src = {props.photo} alt="photo"/>
                    <span id="contriname">{props.emailid}</span>
                </div>
            </div> 
    </a>
    </div>
    )};
export default Memberprofile;