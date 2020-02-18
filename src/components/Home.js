import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
//import MyLocationIcon from '@material-ui/icons/MyLocation';
import GitHubIcon from '@material-ui/icons/GitHub';
import Background from './homeBackground.jpg';
//import LewisAvatar from './lewis_avatar.jpg';
import classNames from 'classnames';
//import AddIcon from '@material-ui/icons/Add';
import Hidden from '@material-ui/core/Hidden';
import './Home.css'; 
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({

    background: {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
    },
    centerText:{
        textAlign:'center'
    },
    pagetitle: {
        fontSize: '4vw',
        fontWeight: 700,
        color: '#fff',
        //marginTop: 120,
        background: '#05264cc7',
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: '3vw',
    },
    pagetitleXs: {
        fontSize: '7vw',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '4vw',
        background: '#05264cc7',
        marginTop: 120,
    },
    gridItem: {
        //marginBottom: '2vw'
    },
    iconButtonSocial: {
        color: '#fff',
        fontSize: '2rem',
    },
    socialIconList: {
        paddingBottom: '3vw',
        background: '#05264cc7',
        paddingRight: 25,
        paddingLeft: 25,
    },
    borderBottom:{
        borderBottomWidth: '1px',
        borderBottomColor: '#fff',
        borderBottomStyle: 'solid',
    },
    skills:{
        color: '#fff',
        // fontStyle: 'italic',
        paddingBottom: '3vw',
        paddingRight: '1.0rem',
        paddingLeft: '1.0rem',
        fontSize: '1.5vw',
        fontWeight: 500,
        textTransform: 'uppercase',
        background: '#05264cc7',
        //marginTop: '6vw',
    },
    skillsXs:{
        color: '#fff',
        // fontStyle: 'italic',
        paddingTop: '1.0rem',
        paddingRight: '1.0rem',
        paddingLeft: '1.0rem',
        fontSize: '4.0vw',
        fontWeight: 500,
        textTransform: 'uppercase',
        background: '#05264cc7',
    },
    statement:{
        color: '#fff',
        fontStyle: 'italic',
        paddingBottom: '3vw',
        paddingRight: '1.0rem',
        paddingLeft: '1.0rem',
        fontSize: '1.5vw',
        background: '#05264cc7',
    },
    statementXs:{
        color: '#fff',
        fontStyle: 'italic',
        paddingTop: '1.5rem',
        paddingRight: '1.0rem',
        paddingLeft: '1.0rem',
        fontSize: '4.0vw',
        background: '#05264cc7',
    },
    addIcon: {
        //backgroundColor:'#000',
        verticalAlign:'middle'
    },
    spacer: {
        height: '30vh'
    },
    spacerXs: {
        height: '10vh'
    },

  }));

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.centerText} >
            
            <div className={classes.background} >
            

            {/* Show only on sm, md, lg, xl */}
            <Hidden only="xs">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{height: '100vh'}}
                >
                        <Grid item >
                            
                        </Grid>
                        
                        <Grid item className={classes.gridItem}>
                            <div className={classes.pagetitle}>
                                LEWIS HARDEMAN
                            </div>
                            <div className={classNames(classes.borderTop, classes.skills)}>
                                <ul style={{listStyleType:'none', margin:'0'}}>
                                    <li>Project Manager</li>
                                    <li>JavaScript Developer</li>
                                    <li>Sales Director</li>
                                    <li>Combat Veteran</li>
                                </ul>
                            </div>
                            <div className={classNames(classes.statement)}>
                                I transform software ideas into business solutions.
                            </div>
                            <div className={classes.socialIconList}>
                                <Link to={'/facebook'}>    
                                    <IconButton aria-label="facebook" >
                                        <FacebookIcon className={classes.iconButtonSocial} />
                                    </IconButton>
                                </Link>
                                <Link to={'/linkedIn'}>    
                                    <IconButton aria-label="linkedIn" >
                                        <LinkedInIcon className={classes.iconButtonSocial} />
                                    </IconButton>
                                </Link>
                                <Link to={'/github'}>    
                                    <IconButton aria-label="github" >
                                        <GitHubIcon className={classes.iconButtonSocial} />
                                    </IconButton>
                                </Link>
                                    <Link to={'/floorsoft'}>    
                                    <IconButton aria-label="floorsoft" >
                                        <InstagramIcon className={classes.iconButtonSocial} />
                                    </IconButton>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Hidden>

                {/* Show xs */}
                <Hidden smUp>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="center"
                        style={{height: '100vh'}} 
                    >
                            <Grid item className={classes.pagetitleXs}>
                                LEWIS HARDEMAN
                            </Grid>
                            <Grid item className={classes.gridItem}>
                                {/* <Avatar alt="Lewis Hardeman" src={LewisAvatar} style={{height:100, width:100}} /> */}
                                <div className={classes.spacerXs} />
                            </Grid>
                            <Grid item className={classes.gridItem}>
                                <div className={classNames(classes.borderTop, classes.skillsXs)}>
                                    <ul style={{listStyleType:'none'}}>
                                        <li>Project Manager</li>
                                        <li>JavaScript Developer</li>
                                        <li>Sales Director</li>
                                        <li>Combat Veteran</li>
                                    </ul>
                                </div>
                                <div className={classNames(classes.statementXs)}>
                                    I transform software ideas into business solutions.
                                </div>
                                <div className={classes.socialIconList}>
                                    <Link to={'/facebook'}>    
                                        <IconButton aria-label="facebook" >
                                            <FacebookIcon className={classes.iconButtonSocial} />
                                        </IconButton>
                                    </Link>
                                    <Link to={'/linkedIn'}>    
                                        <IconButton aria-label="linkedIn" >
                                            <LinkedInIcon className={classes.iconButtonSocial} />
                                        </IconButton>
                                    </Link>
                                    <Link to={'/github'}>    
                                        <IconButton aria-label="github" >
                                            <GitHubIcon className={classes.iconButtonSocial} />
                                        </IconButton>
                                    </Link>
                                        <Link to={'/floorsoft'}>    
                                        <IconButton aria-label="floorsoft" >
                                            <InstagramIcon className={classes.iconButtonSocial} />
                                        </IconButton>
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </Hidden>
            
            </div>
        </div>
    );
}

export default Home;