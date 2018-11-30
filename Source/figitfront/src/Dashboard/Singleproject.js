import React, { Component } from 'react';
import './Projectlist.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import { withRouter, Link } from "react-router-dom";
import './Projectlist.css';

class Singleproject extends React.Component{

    constructor(prop){
        super(prop);

        this.newVal = this.newVal.bind(this);
    }

    newVal(data){
        var value = data.project;
    }

    render(){
        return (<div>
            <Link to={{pathname:"/dashboard", state: {reponame: this.props.project}}}>
            <ListItem button onClick={() => {this.newVal(this.props)}}>
             <i class="fas fa-code-branch"></i>&nbsp;<ListItemText inset primary={this.props.project} id="listitemstyle"/>
             </ListItem> 
             </Link>
         </div>);
    }

}

export default Singleproject;