import React from 'react';
import './FirstpageStyle.css';
import Pin from './logo2.png';


class Firstpage extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
            value: ''
          };
          this.handleChange = this.handleChange.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (event) {
      event.preventDefault();
      var url = 'http://localhost:8000/dashboard/repos_byuser/';
      const value = this.state.value;
	  url = url + value + "/";
      fetch(url, {
      method: 'GET',
      headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'}})
      .then(response => response.json())
.then(response => {alert(response[0].repository_name)});
    }

   


    handleChange(event) {
        this.setState({value: event.target.value});
      }

    render(){
    return(   <div class="body">  
                <div class="topnav">
                    <a class="active" href="C:\Users\desai\Desktop\bootland.html"><img src={Pin} alt="Smiley face"/></a>
                        <div class="topnav-right">
                            <a href="C:/Users/desai/Desktop/help.html">Help</a>
                            <a href="C:/Users/desai/Desktop/about.html">About</a>
                        </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div class="header">
                    <p>Analysing Git.</p>
                    <p>Simplified.</p>
                </div>
                <div class="container-fluid">
                    <div class="form-group">  
                        <form action="#" onSubmit={(event)=>{this.onSubmit(event)}}>
                            <div class="d-flex justify-content-center">
                                <input type="text" class="form-control" id="usr" name="username" placeholder="Enter your email here" value={this.state.value} onChange={this.handleChange} onfocus=""></input>
                            </div>
                            <br/>
                            <div class="d-flex justify-content-center">
                                <button type="submit" class="button"><span>Get Started</span></button>
                            </div>
                            <br/>
                            <div class="d-flex justify-content-center">
                                <a href="#">or Sign In</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );  
    }
}

export default Firstpage;