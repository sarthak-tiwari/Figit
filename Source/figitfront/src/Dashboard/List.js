import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import './Projectlist.css';
import Singleproject from './Singleproject';
import Projectlist from './Projectlist';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
});

function InsetList(props) {
  const { classes } = props;
  return (
    <div class="projectlist">
    <div class="projecthead">
					<p>Projects<i class="fas fa-cog"></i></p>
				</div>
    <List component="nav" className={classes.root} id="liststyle">
      <Projectlist  username={'sanand22'} />
    </List>
    </div>
  );
}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetList);