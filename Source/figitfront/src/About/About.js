import React from 'react';
import './About.css';
import Pin from './logo2.png';
import Pin1 from './yuti.jpg';
import Pin2 from './bharat.jpg';
import Pin3 from './palak.jpg';
import Pin4 from './sarthak.jpg';
import Pin5 from './shefali.jpg';
import Pin6 from './bijya.jpg';
import { withRouter, Link } from "react-router-dom";

class About extends React.Component {
 
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
                <div class="header">
                    <p>About Us</p>
                    <p id="second">Figit is an analyzer that is used to analyze the repositories present over GitHub and provide analyzed information in graphical format. Figit is developed by Software Engineering Graduate students of Arizona State University under the guidance of Dr.Alexandra Mehlhase.</p>
                    <p>Meet the Team!</p>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="card">
                            <img src={Pin4} alt="Sarthak"/>
                            <div class="container">
                                <h2>Sarthak Tiwari</h2>
                                <p class="title">Backend Developer</p>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <img src={Pin6} alt="Bijayalaxmi"/>
                            <div class="container">
                                <h2>Bijayalaxmi Panda</h2>
                                <p class="title">Backend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Pin5} alt="Shefali"/>
                            <div class="container">
                                <h2>Shefali Anand</h2>
                                <p class="title">Backend Developer</p>
        
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Pin2} alt="Bharat"/>
                            <div class="container">
                                <h2>Bharat Goel</h2>
                                <p class="title">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Pin1} alt="Yuti"/>
                            <div class="container">
                                <h2>Yuti Desai</h2>
                                <p class="title">Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src={Pin3} alt="Palak"/>
                            <div class="container">
                                <h2>Palak Chugh</h2>
                                <p class="title">Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
         );  
    }
}
export default About;
