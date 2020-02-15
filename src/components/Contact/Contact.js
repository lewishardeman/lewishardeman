import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({

    pagetitle: {
        fontSize: '4vw',
        fontWeight: 700,
        color: '#fff',
        marginTop: 120,
        background: '#05264cc7',
        paddingRight: 25,
        paddingLeft: 25,
    },

  }));

function Contact() {
    const classes = useStyles();

    return (
        <div >
            
            <div className={classes.pagetitle}>CONTACT</div>
        </div>
    );
}

export default Contact;