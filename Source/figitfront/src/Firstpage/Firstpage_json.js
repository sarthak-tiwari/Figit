import React from 'react';
import Firstpage from './Firstpage';

class Firstpage_json extends React.Component {

    state = {
      firstpagevalue: [
        { email:'Enter your email here'}
      ]
    }
  
    onSubmit = (model) => {
      alert("hi");
    }

    render() {
      return(
        <div>
            <Firstpage className="form">
              model = {[
                {key: "email", props:{required:true}}
              ]}
              onSubmit = {(model) => {this.onSubmit(model)}}
            </Firstpage>
        </div>
      );
    }
  }
  
  export default Firstpage_json;