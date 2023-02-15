import { Badge, Container, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'
import React from 'react';
import {Contacts, Bolt , Message, Settings , Paid , Person, StarBorder, ShoppingCart , List} from '@mui/icons-material'
import { red } from '@mui/material/colors';

const useStyles = makeStyles((theme) =>({
  title:{
    color:'pink'
  },
  container:{
    position:'sticky',
    top:0,
    paddingTop: theme.spacing(10),
    height:'100vh',
    borderRight: 'solid 1px silver',
    [theme.breakpoints.down('sm')]:{
        color:'white',
        backgroundColor:red[300]
    }
  },
  itemLeftbar:{
    cursor:'pointer',
     color:'#555',
     display:'flex',
     alignItems:'center',
     marginBottom:theme.spacing(4),
     [theme.breakpoints.down('sm')]:{
        marginBottom:theme.spacing(5)
     },
     [theme.breakpoints.down('lg')]:{
        justifyContent:'center'
     }
  },
  badgeLeftbar:{
    marginRight:theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
        color:'white'
    }
  },
  titleBadge:{
    [theme.breakpoints.down('sm')]:{
        display:'none'
    },
    [theme.breakpoints.down('lg')]:{
        display:'none',
    }
  }
}))

const Leftbar2 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <div className={classes.itemLeftbar}>
            <Badge title='Contacts' className={classes.badgeLeftbar}>
                <Contacts />
            </Badge>
            <Typography className={classes.titleBadge} variant='h5'>
                Contacts
            </Typography>
        </div>
        <div className={classes.itemLeftbar}>
            <Badge title='Profil' className={classes.badgeLeftbar}>
                <Person />
            </Badge>
            <Typography className={classes.titleBadge} variant='h5'>
                Profil
            </Typography>
        </div>
        <div className={classes.itemLeftbar}>
            <Badge title='Listes' className={classes.badgeLeftbar}>
                <List />
            </Badge>
            <Typography className={classes.titleBadge} variant='h5'>
                Listes
            </Typography>
        </div>
        <div className={classes.itemLeftbar}>
            <Badge title="Achats" className={classes.badgeLeftbar}>
                <ShoppingCart />
            </Badge>
            <Typography className={classes.titleBadge} variant='h5'>
                Achats
            </Typography>
        </div>
        <div className={classes.itemLeftbar}>
            <Badge title='Favoris' className={classes.badgeLeftbar}>
                <StarBorder />
            </Badge>
            <Typography className={classes.titleBadge} variant='h5'>
                Favoris
            </Typography>
        </div>
        <div className={classes.itemLeftbar}>
            <Badge title='Moments' className={classes.badgeLeftbar}>
                <Bolt />
            </Badge>
            <Typography className={classes.titleBadge} variant='h5'>
                Moments
            </Typography>
        </div>
        <div className={classes.itemLeftbar}>
            <Badge title='Messages' className={classes.badgeLeftbar}>
                <Message />
            </Badge>
            <Typography className={classes.titleBadge} variant='h5'>
                Messages
            </Typography>
        </div>
        <div className={classes.itemLeftbar}>
            <Badge title='Monetization' className={classes.badgeLeftbar}>
                <Paid />
            </Badge>
            <Typography className={classes.titleBadge} variant='h5'>
                Monetization
            </Typography>
        </div>
        <div className={classes.itemLeftbar}>
            <Badge title='Settings' className={classes.badgeLeftbar}>
                <Settings />
            </Badge>
            <Typography className={classes.titleBadge} variant='h5'>
                Settings
            </Typography>
        </div>
    </Container>
  );

}

export default Leftbar2;
