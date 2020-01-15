import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import './Header.css'; 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  left: {
    textAlign: 'left',
  }
}));

export default function Header() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>

          <ListItem button >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>HOME</ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>PROJECTS</ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>RESUME</ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>WORK HISTORY</ListItemText>
          </ListItem>

      </List>
      <Divider />
      <List>
      
          <ListItem button >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>CONTACT</ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>HIRE</ListItemText>
          </ListItem>

      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.left}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            LEWIS HARDEMAN
          </Typography>
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button> 
        </Toolbar>
{/*         <Toolbar className="App-header">
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar> */}
      </AppBar>

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>

    </div>
  );
}