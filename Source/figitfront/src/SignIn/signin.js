import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Form,Input, Button } from 'antd';
import './signin.css';
import Pin from './logo2.png';
import { Link } from "react-router-dom";

//axios.defaults.xsrfHeaderName = "X-CSRFToken";
const FormItem = Form.Item;

class Signin extends Component {
  
  constructor(props) {
        super(props);
       
        this.state = {
          value : '',
          returnedValue: 'default',
          username:'',
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
      var recievedMessage = this.props.location.state.email;
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    onSubmit (event) { 
      event.preventDefault();
      const title = event.target.elements.title.value;
      const content = event.target.elements.content.value;
      this.username = title;
      
      var url = 'http://localhost:8000/user/login/';
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json' },
        body: JSON.stringify({"username": title, "password": content})
      })
      .then(response => {return(response.json())})
      .then(response => {this.setState({returnedValue: response["token"]})})
      .then(response => {this.redirectToTarget()})
    }
        
    redirectToTarget = () => {
      if (this.state.returnedValue != "SOME RANDOM TOKEN"){
          alert("Invalid Username or Password !")
      }
      else {
          this.props.history.push({pathname: '/addrepository', state: {username: this.username}});
      }
    }
    
    render() {
      
      return (
        <div className="Signin">
          <div className="topnav">
            <Link className="active" to="/"><img src={Pin} alt="FigitLogo"/></Link>
              <div className="topnav-right">
                <Link to="/help">Help</Link>
                <Link to="/about">About</Link>
              </div>
        </div>
<br></br> 
<div class="header">
  <p id="first"> Welcome Back!</p> 
</div>
<br/>
<br/>
<div class="container-fluid">
  <div class="row">
  <div class="col-lg-3 card justify-content-center offset-lg-1" id="accountcard">
   <div className = "">
      <br/>
      <h4>Sign in with account</h4>
      <div class="form-group">
      <button type="button" id="gitbutton" className="btn-default signinbutton" aria-label="Left Align"><i className="fab fa-github"> Sign in with GitHub</i></button>
      <br/>
      <br/>
      
      <button type="button" id="googbutton" className="btn-default signinbutton" aria-label="Left Align"><i className="fab fa-google"> Sign in with Google</i></button>
      </div>
     <br/>
      <br/>
      <br/>
      <br/>
    </div>
 </div>

 <div class="col-lg-2 offset-lg-1">
  <br/>
      <br/>
      <br/>
      <br/>
  <h4>-or-</h4>
 </div>

  <div class="col-lg-3 card offset-lg-1 justify-content-center" id="usercard">
  <h4  id="head">Sign in with credentials</h4>
  <div class="form-group" >
    <br/>
      <br/>
      <br/>
      <br/>
    <Form onSubmit= {(event) => this.onSubmit(event)}>
   <FormItem >
   <input type="text" class="form-control" id="usr1" placeholder="Enter your username" name="title">
        </input>
            </FormItem>
            <FormItem >
            <input type="Password" class="form-control" id="usr2" placeholder="Choose Password" name="content">
        </input>
            </FormItem>
           
            <FormItem>
                <button class="getinbutton  " htmlType="submit">Get in</button>
            </FormItem>
            
    <br></br>    
    
    </Form>
    </div>
</div>
</div>

</div>

       
         
      
        </div>
      );
    }
  }

  
  export default Signin;