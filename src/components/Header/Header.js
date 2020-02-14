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
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BusinessIcon from '@material-ui/icons/Business';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Hidden from '@material-ui/core/Hidden';

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
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>HOME</ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText>RESUME</ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText>PROJECTS</ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText>WORK HISTORY</ListItemText>
          </ListItem>

      </List>
      <Divider />
      <List>
      
          <ListItem button >
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText>CONTACT</ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText>HIRE ME</ListItemText>
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
          <Hidden xsDown>
            <Button color="inherit">Resume</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Contact</Button>
          </Hidden> 
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