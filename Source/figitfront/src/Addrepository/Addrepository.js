  import React from 'react';
  import './Addrepository.css';

  class Addrepository extends React.Component {

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
                     <form name="add_name" id="add_name" action="#">  
                          <div className="table-responsive">  
                             <div className="d-flex justify-content-center">
                               <table className="table table-bordered" id="dynamic_field" style={{width: 650+'px'}}>  
                                    <tr>  
                                         <td><input type="text" name="name[]" id="link"  placeholder="Paste your GitHub repository link here" className="form-control name_list" /></td>  
                                         <td><button type="button" name="add" id="add" className="btn btn-success"><i className="fas fa-plus"></i> Add More</button></td>  
                                    </tr>  
                               </table>  
                              </div>
                              <div className="d-flex justify-content-center">
                              <button type="submit" name="submit" id="submit" className="btn" 
                              style={{width: 190+'px',height: 45+'px',padding: 1+'px',borderRadius: 4+'px', fontSize: 17+'px'}} ><span>Go to Dashboard</span></button>
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