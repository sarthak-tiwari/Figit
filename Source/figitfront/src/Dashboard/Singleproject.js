import React from 'react';
import './Projectlist.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

var value = '';

function newVal(props){
    value = props.project;
    alert(value);
}

const Singleproject = (props) => {

    return (<div>
               <ListItem button onClick={() => {newVal(props)}}>
                <i class="fas fa-code-branch"></i>&nbsp;<ListItemText inset primary={props.project} id="listitemstyle"/>
                </ListItem> 
            </div>)
            
};
export default Singleproject;