import { Grid, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'
import React from 'react';
import Add from './Components-2/Add';
import Feed2 from './Components-2/Feed-2';
import Leftbar2 from './Components-2/Leftbar-2';
import Navbar2 from './Components-2/Navbar-2';
import RightBar2 from './Components-2/Rightbar-2';

const useStyles = makeStyles((theme) =>({
  
  rightbar:{
    [theme.breakpoints.down('sm')]:{
      display:'none'
    },
    [theme.breakpoints.down('lg')]:{
      display:'none'
    }
  }
}))

const App1 = () => {
  const classes = useStyles();
  return (
    <div>
        
        <Navbar2 />
        <Grid container className={classes.container}>
          <Grid className={classes.gridItem} item sm={2} lg={2} md={2} xs={2} >
            <Leftbar2 />
          </Grid>
          <Grid className={classes.gridItem} item sm={10} lg={8} md={10} xs={10} >
            <Feed2 />
          </Grid>
          <Grid className={classes.rightbar} item lg={2}>
            <RightBar2 />
          </Grid>
        </Grid>
        <Add />
    </div>
  );

}

export default App1;
