import React, { Component } from 'react';
import Profilejason from './Profilejason';
import Dashheader from './Dashheader';
import Projectlist from './Projectlist';
import Member from './Member';
import Wholeflash from './Wholeflash';
class App extends Component {

  render() {
    return(
      
      <div>
          <Dashheader />
          <div class="row content">
            <div class="col-lg-3">
            <Profilejason />
            <Projectlist />
            </div>
            <div class="col-lg-6"> 
            <Wholeflash />
            <h1>Welcome</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident,
         sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <hr/>
      <h3>Test</h3>
      <p>Lorem ipsum...</p>
              </div>
              <div class="col-lg-3">
                <Member />
              </div>
            </div>
           
        </div> 
    );
  }
}
export default App;