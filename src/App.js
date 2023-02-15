import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from './Components/Navbar';
import LeftBar from './Components/LeftBar';
import RightBar from './Components/RightBar';
import Feed from './Components/Feed';
import Add from './Components/Add';


const useStyles = makeStyles((theme) => ({
  rightBar:{
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  }
}))

const App = () => {
  const classes = useStyles();

  return (
    <div>

      <Navbar />
      <Grid container className={classes.section}>
        <Grid item xs={2} sm={2} className={classes.leftBar}>
          <LeftBar />
        </Grid>
        <Grid item xs={10} sm={7} className={classes.feed}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.rightBar}>
          <RightBar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );

}

export default App;
