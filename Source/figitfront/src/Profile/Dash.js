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