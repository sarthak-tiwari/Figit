import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Form,Input, Button } from 'antd';
import './Signup.css';
import Pin from './logo2.png';

const FormItem = Form.Item;

class Signup extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
          value : '',
          returnedValue: 'default'
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.setState({value: "abc.com"});

        this.handleChange = this.handleChange.bind(this);
        

    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
    onSubmit = (event) =>
  
    { event.preventDefault();
      const title = event.target.elements.title.value;
      const content = event.target.elements.content.value;
      const user_id = localStorage.getItem('token');
      var url = 'http://localhost:8000/user/login/';
      console.log(event.target.elements.title.value);
      console.log(event.target.elements.content.value);
      fetch(url, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
            
        },
        body: JSON.stringify({"email": event.target.elements.title.value, "password": event.target.elements.content.value})
      })
        .then(res=>res.json())
        .then(res => console.log(res));
         
        var x = {email:event.target.elements.title.value, password:event.target.elements.content.value};
      alert(JSON.stringify(x));
        
    }
        

    
    render() {
      
      return (
        <div className="Signup">
          <div className="topnav">
            <a className="active" href="C:/Users/desai/Desktop/bootland.html"><img src={Pin} alt="FigitLogo"/></a>
              <div className="topnav-right">
                <a href="C:/Users/desai/Desktop/help.html">Help</a>
                <a href="C:/Users/desai/Desktop/about.html">About</a>
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
  <div class="col-lg-3 card  justify-content-center offset-lg-1" id="accountcard">
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
   <input type="text" class="form-control" id="usr1" placeholder="Enter your email" name="title" value={this.state.value}
    onChange={this.handleChange}>
        </input>
            </FormItem>
            <FormItem >
            <input type="Password" class="form-control" id="usr2" placeholder="Choose Password" name="content">
        </input>
            </FormItem>
            <FormItem >
            <input type="Password" class="form-control" id="usr2" placeholder="Confirm Password" name="content">
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

  
  export default Signup;