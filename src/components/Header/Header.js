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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import HeaderAvatar from './lewis_avatar.jpg';

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
    width: 300,
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

  const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
          borderRadius: 0,
          border: 0,
          color: 'white',
          height: 64,
          padding: '0 30px',
        },
      },

      MuiAppBar:{
        colorPrimary:{
          backgroundColor: '#05264C',
          color: '#e1e1e1',
        },
      },

      MuiDrawer: {
        paper:{
          backgroundColor: '#05264C',
          color: '#e1e1e1',
        },
      },

      MuiSvgIcon:{
        root:{
          color: '#e1e1e1',
        },
      },

      MuiDivider: {
        root:{
          backgroundColor: '#e1e1e15c',
        },
      },

    },
  });

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
        <ListItem>
            <Avatar alt="Lewis Hardeman" src={HeaderAvatar} style={{height:40, width:40, marginRight:17}} />
            <Typography variant="h6" className={classes.title}>
              LEWIS HARDEMAN
            </Typography>
        </ListItem>
      </List>
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
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar className={classes.left}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Avatar alt="Lewis Hardeman" src={HeaderAvatar} style={{height:40, width:40, marginRight:10}} />
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
      </ThemeProvider>
    </div>
  );
}