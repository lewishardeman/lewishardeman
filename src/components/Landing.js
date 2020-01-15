import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Background from './sunset.jpg';
import Header from './Header/Header';


const useStyles = makeStyles(theme => ({

    background: {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
    },
  }));

function Landing() {
    const classes = useStyles();

    return (
        <div >
            
            <body className={classes.background} >
            <Header />
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{paddingTop: '5vw'}}
            >
                    <Grid item>
                        <h1>LEWIS HARDEMAN</h1>
                    </Grid>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src="/lewis_avatar.jpg" style={{height:200, width:200}} />
                    </Grid>
                    <Grid item className={classes.root}>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete" disabled color="primary">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="add an alarm">
                            <AlarmIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </body>
        </div>
    );
}

export default Landing;