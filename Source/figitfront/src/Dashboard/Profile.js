import React from 'react';
import './Profile.css';

const profile = (props) => {
    return <div className = "profile">
                <div className= "photo1">
                    <img src = {props.photo} alt="photo"/>
                    <span>{props.emailid}</span>
                </div>
            </div> 

};
export default profile;