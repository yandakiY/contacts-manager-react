import React from 'react'
import {makeStyles} from '@mui/styles'
import { BottomNavigation as BottomNav, BottomNavigationAction, Paper } from '@mui/material';
import { Favorite, Person } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    bottomNavig:{
        display:'none',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    }
}))

const BottomNavigation = ({changePage}) => {
    const classes = useStyles();
  return (
    <Paper className={classes.bottomNavig} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNav
                showLabels
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
                        >
            <BottomNavigationAction onClick={() => changePage(false)} label="Contacts" icon={<Person /> } />
            <BottomNavigationAction onClick={() => changePage(true)} label="Favorites" icon={<Favorite />} />
        </BottomNav>
    </Paper>
  )
}

export default BottomNavigation