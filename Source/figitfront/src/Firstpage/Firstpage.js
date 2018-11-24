  import React from 'react';
  import './FirstpageStyle.css';
  import Pin from './logo2.png';
  import { withRouter } from "react-router-dom";


  class Firstpage extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          value: '',
          returnedValue: 'default'
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (event) {
    event.preventDefault();
    var url = 'http://localhost:8000/user/user_exists/';
    const value = this.state.value;
    fetch(url, {
    method: 'POST',
    headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'},
	body: JSON.stringify({"email": value})
	})
    .then(response => {return(response.json())})
    .then(response => {this.setState({returnedValue: response["value"]})})
    .then(response => {this.redirectToTarget()})
  }

  handleChange(event) {
      this.setState({value: event.target.value});
    }

  redirectToTarget = () => {
    const value = this.state.value;
    if (this.state.returnedValue === true){
        this.props.history.push({pathname: '/signin', state: {email: value}});
    }
    else {
        this.props.history.push('/help');
    }
  }

  render(){
  return(   <div className="landpage">  
              <div className="topnav">
                  <a className="active" href="C:/Users/desai/Desktop/bootland.html"><img src={Pin} alt="FigitLogo"/></a>
                      <div className="topnav-right">
                          <a href="C:/Users/desai/Desktop/help.html">Help</a>
                          <a href="C:/Users/desai/Desktop/about.html">About</a>
                      </div>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div className="header" id="home">
                  <p>Analysing Git.</p>
                  <p>Simplified.</p>
              </div>
              <div className="container-fluid">
                  <div className="form-group">  
                      <form action="#" onSubmit={(event)=>{this.onSubmit(event)}}>
                          <div className="d-flex justify-content-center">
                              <input type="email" className="form-control" id="usr" name="username" placeholder="Enter your email here" value={this.state.value} onChange={this.handleChange}></input>
                          </div>
                          <div className="d-flex justify-content-center">
                              <button type="submit" className="getinbutton">Get Started</button>
                          </div>
                          <br/>
                          <div className="d-flex justify-content-center">
                              <a href="#home">or Sign In</a>
                          </div>
                      </form>
                  </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              </div>
          </div>
       );  
  }
  }

  export default withRouter(Firstpage);