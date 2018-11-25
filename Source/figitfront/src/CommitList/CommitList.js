import React, { Component} from 'react';
import './CommitList.css';
import Pin from './logo.png';
import ReactDOM from 'react-dom';
import CommitTemplate from './CommitTemplate.jsx'

class CommitList extends React.Component {
 
    render() {

        var rows = [];
        var data = [[['Date', '12/21/2018'],
        ['Message', 'This is a commit message spanning lot of characters...... a big commit message really !'],
        ['Number of Additions', 52], 
        ['Number of Deletions', 32],
        ['Number of Files Modified', 5]],
        [['Date', '10/1/2018'],
        ['Message', 'Another Gibrish acters...... a big commit message really !'],
        ['Number of Additions', 25],
        ['Number of Deletions', 35],
        ['Number of Files Modified', 15]],
        [['Date', '10/1/2018'],
        ['Request Body', 'Some pull request body !'],
        ['Reviewers', 'Some People']],
        [['Date', '10/1/2018'],
        ['Review Body', 'Some pull request body !'],
        ['Comments', 'Some Review Comments']]];

        for (var j = 0; j < 20; j++) {
            for (var i = 0; i < data.length; i++) {
                rows.push(CommitTemplate(data[i]));
            }
        }

    return(
        <div>
        <div>
            Header !
        </div>
        <div class="listContainer">
            {rows}
        </div>
        </div>
         );  
    }
}
export default CommitList;