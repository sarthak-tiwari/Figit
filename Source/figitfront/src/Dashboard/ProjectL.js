import React from 'react';
import Projectlist from './Projectlist';

class ProjectL extends React.Component {

    state = {
      Projectlists: [
        { project:'ProjectName1'},
        { project:'ProjectName2'},
        { project:'ProjectName3'}
      ]
    }
  
    render() {
      return(
        <div>
            <Projectlist project={this.state.Projectlists[0].project}></Projectlist>
        </div>
      );
    }
  }
  
  export default ProjectL;