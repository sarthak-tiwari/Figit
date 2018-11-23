import React, { Component} from 'react';
import './CommitList.css';

function CommitTemplate(prop) {

  let rows = [];
  
  for(var i = 0; i < prop.length; i++){
    rows.push(<p>{prop[i][0]} : {prop[i][1]}</p>);
  }

  return (
    <a href="https://www.google.com">
      <div className='commitTemplate'>
        {rows}
      </div>
    </a>
    
  );
};
export default CommitTemplate;