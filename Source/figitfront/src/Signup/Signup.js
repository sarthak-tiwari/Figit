import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Form,Input, Button } from 'antd';
import './Signup.css';
import Pin from './logo2.png';
import { Link } from "react-router-dom";

const FormItem = Form.Item;

class Signup extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
          value : '',
          returnedValue: 'default',
          content: "",
          data: "",
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.setState({value: "abc.com"});

        this.handleChange = this.handleChange.bind(this);
        

    }
inputPassword=event=>{
  this.setState({data:event.target.value});
}
confirmPassword=event=>{
  this.setState({content:event.target.value});
}
    componentDidMount() {
      var recievedMessage = this.props.location.state.email;
    }
  
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    

    inputPassword=event=>{
      this.setState({data:event.target.value});
    }
    confirmPassword=event=>{
      this.setState({content:event.target.value});
    }

    onSubmit = (event) =>
  
    { event.preventDefault();
      const{data,content}=this.state;
      const title = event.target.elements.title.value;
  
      if(data !=content)
      alert("Password do not match");
      else
      {
      var url = 'http://localhost:8000/user/register/';
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json' },
        body: JSON.stringify({"email": this.props.location.state.email, "username": title, "password": data}) 
      })
      .then(response => {return(response.json())})
      .then(response => {this.setState({returnedValue: response["email"]})})
      .then(response => {this.redirectToTarget()})
    }
    }

    redirectToTarget = () => {
      if (this.state.returnedValue != this.props.location.state.email){
          alert("A user with that username already exists.")
      }
      else {
          this.props.history.push('/addrepository');
      }
    }

    render() {
      
      return (
        <div className="Signup">
          <div className="topnav">
            <Link className="active" to="/"><img src={Pin} alt="FigitLogo"/></Link>
              <div className="topnav-right">
                <Link to="/help">Help</Link>
                <Link to="/about">About</Link>
              </div>
        </div>
<br></br> 
<div class="header">
  <p id="first"> Welcome Aboard!</p> 
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
  <h4  id="head">Sign up with credentials</h4>
  <div class="form-group" >
    <br/>
      <br/>
      <br/>
      <br/>
    <Form onSubmit= {(event) => this.onSubmit(event)}>
   <FormItem >
   <input type="text" class="form-control" id="usr1" placeholder="Enter your username" name="title" value={this.state.value}
    onChange={this.handleChange}>
        </input>
            </FormItem>
            <FormItem >
            <input type="Password" class="form-control" id="usr2" placeholder="Choose Password" name="data" onChange={this.inputPassword}>
        </input>
            </FormItem>
            <FormItem >
            <input type="Password" class="form-control" id="usr2" placeholder="Confirm Password" name="content" onChange={this.confirmPassword}>
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