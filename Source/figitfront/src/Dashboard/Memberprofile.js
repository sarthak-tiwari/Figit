import React from 'react';
import './Memberprofile.css';

const Memberprofile = (props) => {
    return (
    <a href={props.gitLink}>
    <div className = "profile1">
                <div className= "photo2">
                    <img src = {props.photo} alt="photo"/>
                    <span>{props.emailid}</span>
                </div>
            </div> 
    </a>
    )};
export default Memberprofile;