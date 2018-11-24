import React from 'react';
import { Redirect } from 'react-router-dom';
import './Addrepository.css';
import '../index.js';

class Addrepository extends React.Component {

        constructor(props) {
            super(props);

            this.onSubmit = this.onSubmit.bind(this);
        }

        // state = {
        //     redirect: false
        // }

        // setRedirect = () => {
        //     this.setState({
        //         redirect: true
        //     })
        // }

        // renderRedirect = () => {
        //     if (this.state.redirect) {
        //         return <Redirect to = '/target' / >
        //     }
        // }

        onSubmit (event) {
           event.preventDefault();
           alert("submitted");
           this.redirectToTarget();
         }

        redirectToTarget = () => {
            this.props.history.push('/dashboard');
        }


render(){
  return(
    <div className = "body">
      <div className="topnav">
        <a className="active" href="C:\Users\desai\Desktop\bootland.html">
          <img className="logo-img" src="C:/Users/desai/Desktop/logo.png" alt="Smiley face"/>
        </a>
        <div className="topnav-right" style={{marginTop: 25+'px'}}>
          <a href="#search">Help</a>
          <a href="#about">About</a>
        </div>
      </div>
      <div className="header">
        <p>You need to add some repositories!</p>
      </div>
      <div className="container-fluid">
        <div className="form-group">
          <form name="add_name" id="add_name" onSubmit={(event)=>{this.onSubmit(event)}} action="#">
            <div className="table-responsive">
              <div className="d-flex justify-content-center">
                <table className="table" id="dynamic_field" style={{width: 650+'px'}}>
                  <tbody>
                    <tr>
                      <td><input type="text" id="link"  placeholder="Paste your GitHub repository link here" className="form-control name_list" /></td>
                      <td><button type="button" name="add" id="add" className="btn btn-success"><i className="fas fa-plus"></i> Add More</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn" disabled type="submit" id="submit"
                style={{width: 190+'px',height: 45+'px',padding: 1+'px',borderRadius: 4+'px', fontSize: 17+'px'}} >Go to Dashboard</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );  
  }
}

export default Addrepository;