import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Form,Input, Button } from 'antd';
import axios from 'axios';
import './signin.css';

axios.defaults.xsrfHeaderName = "X-CSRFToken";
const FormItem = Form.Item;

class Signin extends Component {

    constructor() {
        super();
        

    }
    handleSubmit = (event) =>
  
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
        <div className="Signin">
          
          <div class="topnav">
  <a class="active" href="C:/Users/PALAK CHUGH/Desktop/SER 515/Bootstrap/Create.html">
  <img src="" alt="LOGO"></img>
  </a>
  <div class="topnav-right">
    <a href="#search">Help</a>
    <a href="#about">About</a>
  </div>
</div>
<br></br> 
<div class="header">
  <p id="first"> Welcome Back!</p>
   
</div>
<div class="container-fluid">
  <div class="row">
 <div class="col-lg-3 offset-lg-1">
   
    <div >
      <h4 >Sign in with account</h4>
      <div class="form-group">
      <button type="button" class="btn" aria-label="Left Align"><span id="span1" ><i className="fab fa-github"> Sign in with GitHub</i></span></button>
      
      <button type="button" class="btn-default" aria-label="Left Align"><span id="span2"><i className="fab fa-google"> Sign in with Google</i></span></button>
      </div>
      
      </div>
 </div>

 <div class="col-lg-2 offset-lg-1">
  <h4>-or-</h4>
 </div>

  <div class="col-lg-3 offset-lg-1">
  <h4  id="head">Sign in with credentials</h4>
  <div class="form-group" >
    <Form onSubmit= {(event) => this.handleSubmit(event)}>
    
   <FormItem >
   <input type="text" class="form-control" id="usr1" placeholder="Enter your email" name="title" >
        </input>
            </FormItem>
            <FormItem >
            <input type="Password" class="form-control" id="usr2" placeholder="Choose Password" name="content">
        </input>
            </FormItem>
           
            <FormItem>
                <button  class="smallbtn" htmlType="submit"><span id = "span2">Get in</span></button>
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