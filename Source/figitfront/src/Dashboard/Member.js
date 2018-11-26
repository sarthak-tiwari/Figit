import React from 'react';
import './Member.css';
import Memberprofile from './Memberprofile';

class Member extends React.Component {

  render(){
    var rows =[];
    var members = [
      [['photo','https://avatars3.githubusercontent.com/u/25068531?v=4'],['emailid','yrdesai@asu.edu'],['gitLink','https://www.google.com']],
      [['photo','http://admission.igntuonline.in/dist/img/UserImage.jpg'],['emailid','bpanda@asu.edu'],['gitLink','https://www.yahoo.com']],
      [['photo','http://admission.igntuonline.in/dist/img/UserImage.jpg'],['emailid','pchugh@asu.edu'],['gitLink','https://www.google.com']],
      [['photo','http://admission.igntuonline.in/dist/img/UserImage.jpg'],['emailid','yrdesai@asu.edu'],['gitLink','https://www.google.com']],
      [['photo','http://admission.igntuonline.in/dist/img/UserImage.jpg'],['emailid','yrdesai@asu.edu'],['gitLink','https://www.google.com']],
      [['photo','http://admission.igntuonline.in/dist/img/UserImage.jpg'],['emailid','yrdesai@asu.edu'],['gitLink','https://www.google.com']]
    ];
    
    for (var j = 0; j<members.length; j++){
        rows.push(<Memberprofile photo={members[j][0][1]} emailid={members[j][1][1]} gitLink={members[j][2][1]}/>);
    }
  
    return( <div class="contributorlist card">
          <div class="contriheading">
              <h3>Contributors</h3>
              </div>
            <div>
          {rows}
            </div>
            </div>);
    }

}
export default Member;
