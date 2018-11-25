import React from 'react';
import { Redirect } from 'react-router-dom';
import './Addrepository.css';
import '../index.js';
import Pin from './logo2.png'
import $ from 'jquery';

class Addrepository extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onSubmit (event) {
    event.preventDefault();
    alert("submitted");
    this.redirectToTarget();
  }

 redirectToTarget = () => {
     this.props.history.push('/dashboard');
 }
 
 onAdd(){
   var i = 0;
   if (document.getElementById('link').value != "") {
       i++;
       $('#dynamic_field').append(
        '<tr id="row' + i + '">+\
        <td><p readonly type="text" +\
        id="link' + i + '" +\
        class="form-control name_list intext"> ' + $('#link').val() + '</p></td> +\
        <td><button type="button" +\
        name="remove" id="' + i + '" class="btnadd btn-danger btn_remove"><i class="fas fa-trash-alt"></i></button></td>+\
        </tr>'
      );
       document.getElementById('link').value = "";
       $("#submit").removeAttr('disabled');
   } 
 }

render(){
  return(
    <div className = "body">
      <div className="topnav">
            <a className="active" href="C:/Users/desai/Desktop/bootland.html"><img src={Pin} alt="FigitLogo"/></a>
              <div className="topnav-right">
                <a href="C:/Users/desai/Desktop/help.html">Help</a>
                <a href="C:/Users/desai/Desktop/about.html">About</a>
              </div>
        </div>
        <br/><br/><br/><br/><br/>
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
                      <td><input type="text" id="link"  placeholder="Paste your GitHub repository link here" className="form-control intext name_list linkin" /></td>
                      <td><button type="button" name="add" id="add" className="btnadd btn-success"><i className="fas fa-plus"></i> Add More</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btnadd" disabled type="submit" id="submit"
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