import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Addrepository.css';
import '../index.js';
import Pin from './logo2.png'
import $ from 'jquery';

class Addrepository extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      i : 0,
      value : '',
      repo_list : [],
    };
    this.repo_list = [];
    this.onSubmit = this.onSubmit.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onSubmit (event) {
    event.preventDefault();
    this.redirectToTarget();
  }

 redirectToTarget = () => {
     this.props.history.push({pathname: '/dashboard', state: {reponame: 'ScrumDevils-SER_515'}});
 }
 
 onAdd(){
   var j = this.state.i;
   this.setState({i : j + 1});
   if (document.getElementById('link').value != "") {
     var repo = document.getElementById('link').value;
     this.repo_list.push(repo);
     var url = 'http://localhost:8000/dashboard/repos/'+this.props.location.state.username+'/';
     fetch(url, {
       method: 'POST',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json' },
       body: JSON.stringify([{"repository_url": repo}]) 
     })
     .then(response => {return(response.json())})
     
       $('#dynamic_field').append(
        '<tr id="row' + j + '">+\
        <td><p readonly type="text" +\
        id="link' + j + '" +\
        class="form-control name_list intext"> ' + $('#link').val() + '</p></td> +\
        <td><button type="button" +\
        name="remove" +\
        id="' + j + '" class="btnadd btn-danger btn_remove"><i class="fas fa-trash-alt"></i></button></td>+\
        </tr>'
      );
       document.getElementById('link').value = "";
       $("#submit").removeAttr('disabled');
   } 
   $(document).on('click', '.btn_remove', function() {
    var button_id = $(this).attr("id");
    $('#row' + button_id + '').remove();
    });
 }

render(){
  return(
    <div className = "body">
      <div className="topnav">
            <Link className="active" to="/"><img src={Pin} alt="FigitLogo"/></Link>
              <div className="topnav-right">
                <Link to="/help">Help</Link>
                <Link to="/about">About</Link>
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
                      <td><input type="text" id="link"  placeholder="Paste your GitHub repository link here" className="form-control intext name_list" /></td>
                      <td><button type="button" name="add" onClick={this.onAdd} id="add" className="btnadd btn-success"><i className="fas fa-plus"></i> Add More</button></td>
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