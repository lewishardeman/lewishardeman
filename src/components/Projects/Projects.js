import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import WBYS from './wbys.jpg';
import Measuremaker from './measuremaker.jpg';
import Lewishardeman from './lewishardeman.jpg';
import Promeasuring from './promeasuring.jpg';
import Sunset from './sunset.jpg';
import Floorsoft from './floorsoft.JPG';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    //maxWidth: 345,
  },
  media: {
    height: 160,
  },
  pagetitle: {
    fontSize: '4vw',
    fontWeight: 700,
    color: '#05264cc7',
    paddingTop: 75,
    //background: '#05264cc7',
    //paddingRight: 25,
    //paddingLeft: 25,
  },
  projectContainer: {
      //marginTop: 120,
      //backgroundColor: '#e2e2e2',
  }
}));

function Wbys() {
    return (
      <div>
        <h2>WBYS</h2>
      </div>
    );
  }

export default function Projects() {
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
          height: 44,
          padding: '0 30px',
        },
      },
      MuiCardContent: {
        root: {
            maxHeight: 100,
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Container className={classes.projectContainer} >
        <div className={classes.pagetitle}>
            PROJECTS
        </div>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={3}
        >
            <Grid item xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={WBYS}
                        title="WBYS"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                WBYS
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Full stack application allowing flooring retailers to purchase heavily discounted rolled flooring goods directly from the manufacturer's distressed inventory.     
                            </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                {/*         <Button size="small" color="primary">
                        Share
                        </Button> */}
                        <Link to={Wbys}>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={Measuremaker}
                        title="MeasureMaker"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                MeasureMaker
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                MeasureMaker is a client-side interface and API which allows the scheduling of measuring appointments through FloorWizard.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                {/*         <Button size="small" color="primary">
                        Share
                        </Button> */}
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={Promeasuring}
                        title="Promeasuring"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                ProMeasuring.com
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                ProMeasuring provides professional measuring services for a wide range of clients throughout the flooring industry.
                            </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                {/*         <Button size="small" color="primary">
                        Share
                        </Button> */}
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={Lewishardeman}
                        title="Lewishardeman"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                LewisHardeman.com
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This is my personal website which you are currently viewing.
                            </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                {/*         <Button size="small" color="primary">
                        Share
                        </Button> */}
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={Sunset}
                        title="Eric's Epoxy"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Eric's Epoxy
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This is the default text for Project 5
                            </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                {/*         <Button size="small" color="primary">
                        Share
                        </Button> */}
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={Floorsoft}
                        title="floorsoft"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                floorsoft.com
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A full stack company website including front end, API and search engine optimization.
                            </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                {/*         <Button size="small" color="primary">
                        Share
                        </Button> */}
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={Sunset}
                        title="The Garrison"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                The Garrison RV Park
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This is the default text for Project 5
                            </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                {/*         <Button size="small" color="primary">
                        Share
                        </Button> */}
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            
        </Grid>
    </Container>
</ThemeProvider>
  );
}