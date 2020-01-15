import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Background from './sunset.jpg';
import LewisAvatar from './lewis_avatar.jpg';
import Header from './Header/Header';


const useStyles = makeStyles(theme => ({

    background: {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
    },
    pagetitle: {
        fontSize: '4vw',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '2vw'
    },
    gridItem: {
        marginBottom: '2vw'
    },
    iconButtonSocial: {
        color: '#fff',
        fontSize: '2rem',
    },
    borderTop:{
        borderTopWidth: '1px',
        borderTopColor: '#fff',
        borderTopStyle: 'solid',
        color: '#fff',
        fontStyle: 'italic',
        padding: '10px',
        fontSize: '1.5rem',
    }
  }));

function Landing() {
    const classes = useStyles();

    return (
        <div >
            
            <div className={classes.background} >
            <Header />
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{height: '90vh'}}
                
            >
                    <Grid item className={classes.pagetitle}>
                        LEWIS HARDEMAN
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Avatar alt="Lewis Hardeman" src={LewisAvatar} style={{height:200, width:200}} />
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <div className={classes.borderTop}>
                            Full Stack JavaScript developer and lover of the outdoors.
                        </div>
                    </Grid>
                    <Grid item >
                        <IconButton aria-label="delete" >
                            <DeleteIcon className={classes.iconButtonSocial} />
                        </IconButton>
                        <IconButton aria-label="delete"  >
                            <DeleteIcon className={classes.iconButtonSocial} />
                        </IconButton>
                        <IconButton  aria-label="add an alarm" >
                            <AlarmIcon className={classes.iconButtonSocial} />
                        </IconButton>
                        <IconButton  aria-label="add to shopping cart" >
                            <AddShoppingCartIcon className={classes.iconButtonSocial} />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Landing;