import React, { Component } from 'react';
import Profilejason from './Profilejason';
import Dashheader from './Dashheader';
import Projectlist from './Projectlist';
import Member from './Member';
import Wholeflash from './Wholeflash';
class Dashboard extends Component {

  constructor( props ){
    super();
    this.state= {
      reponame : 'ScrumDevils-SER_515'
    }
  }

  componentWillReceiveProps() {
    this.setState(function(state, props) {
      return {
        reponame: props.location.state.reponame
      };
    });
  }

  render() {
    return(
      
      <div>
          <Dashheader />
          <div class="row content">
            <div class="col-lg-3">
            <Profilejason />
            <Projectlist username={'sanand22'}/>
            </div>
            <div class="col-lg-6"> 
            <Wholeflash reponame={this.state.reponame}/>
              </div>
              <div class="col-lg-3">
                <Member />
              </div>
            </div>
           
        </div> 
    );
  }
}
export default Dashboard;