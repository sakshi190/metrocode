import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { blue, grey } from '@material-ui/core/colors';
import bounce from "../images/bounce.jpg";
import olaUber from "../images/OlaUber.jpg";
import metro from "../images/namm.PNG";
import parking from "../images/parking.PNG";
import map from "../images/map.jpg";

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
      height:'150px',
      
    },
    
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));
export default function Test() {
    const classes = useStyles();
    return (
        <div className="container">
      
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Paper elevation={8} className={classes.paper}>
          <Link to="/metro"><img className="responsive" src={metro} height="130px" width="150px" /></Link>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={8} className={classes.paper}>
          <a href="https://english.bmrc.co.in/TravelInfos"><img className="responsive" src={map} /></a>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={8} className={classes.paper}>
          <a href="https://bounceshare.com/web/login"><img src={bounce} height="130px" width="150px" /></a>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper elevation={8} className={classes.paper}>
          <Link to="/ola_uber"><img src={olaUber} /></Link>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper elevation={8} className={classes.paper}>
          <a href=""><img src={parking} /></a>
          </Paper>
        </Grid>
        
      </Grid>
      <Divider className={classes.divider} />
      
    </div>
    )
}
