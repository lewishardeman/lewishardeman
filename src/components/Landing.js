import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
//import MyLocationIcon from '@material-ui/icons/MyLocation';
import GitHubIcon from '@material-ui/icons/GitHub';
import Background from './sunset.jpg';
import LewisAvatar from './lewis_avatar.jpg';
import Header from './Header/Header';
import classNames from 'classnames';
import AddIcon from '@material-ui/icons/Add';


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
    socialIconList: {
        paddingTop: '1.0rem',
    },
    borderBottom:{
        borderBottomWidth: '1px',
        borderBottomColor: '#fff',
        borderBottomStyle: 'solid',
    },
    skills:{
        color: '#fff',
        // fontStyle: 'italic',
        paddingTop: '1.0rem',
        paddingRight: '1.0rem',
        paddingLeft: '1.0rem',
        fontSize: '1.5vw',
        fontWeight: 500,
        textTransform: 'uppercase'
    },
    statement:{
        color: '#fff',
        fontStyle: 'italic',
        paddingTop: '1.5rem',
        paddingRight: '1.0rem',
        paddingLeft: '1.0rem',
        fontSize: '1.5vw',
    },
    addIcon: {
        //backgroundColor:'#000',
        verticalAlign:'middle'
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
                        <div className={classNames(classes.borderTop, classes.skills)}>
                            Project Manager  <AddIcon className={classes.addIcon}/>  JavaScript Developer  <AddIcon className={classes.addIcon}/>  Sales Director  <AddIcon className={classes.addIcon}/>  Combat Veteran
                        </div>
                        <div className={classNames(classes.statement)}>
                            I transform software ideas into business solutions.
                        </div>
                    </Grid>
                    <Grid item className={classes.socialIconList} >
                        <IconButton aria-label="delete" >
                            <FacebookIcon className={classes.iconButtonSocial} />
                        </IconButton>
                        <IconButton aria-label="delete"  >
                            <LinkedInIcon className={classes.iconButtonSocial} />
                        </IconButton>
                        <IconButton  aria-label="add an alarm" >
                            <GitHubIcon className={classes.iconButtonSocial} />
                        </IconButton>
                        <IconButton  aria-label="add to shopping cart" >
                            <InstagramIcon className={classes.iconButtonSocial} />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Landing;