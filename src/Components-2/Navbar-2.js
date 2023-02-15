import { Search,  SearchOutlined, Cancel } from '@mui/icons-material';
import { alpha, AppBar, Avatar, Badge, Container, InputBase, Toolbar, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import {Mail , Notifications} from '@mui/icons-material'
import {makeStyles} from '@mui/styles'
import React , {useState} from 'react';
import profil from '../img/BANANADESIGN-FAVICON.png';

const useStyles = makeStyles((theme) =>({
  Toolbar:{
    backgroundColor: red[300],
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  logo:{
    display:'flex'
  },
  logoLg:{
    display:'block',
    [theme.breakpoints.down('sm')]:{
        display:'none'
    }
  },
  logoXs:{
    display:'none',
    [theme.breakpoints.down('sm')]:{
        display:'block'
    }
  },
  searchBar:{
    display:'flex',
    alignItems:'center',
    width:'55%',
    backgroundColor: alpha(theme.palette.common.black , 0.25),
    borderRadius: theme.shape.borderRadius,
    // '&:focus':{
    //     backgroundColor: alpha(theme.palette.common.white , 0.25)
    // }
    [theme.breakpoints.down('sm')]:{
        display: (props) => props.openBar ? 'flex' : 'none',
        width:'60%'
    }
  },
  notifications:{
    display:'flex',
    alignItems:'center',
    [theme.breakpoints.down('sm')]:{
        display: (props) => props.openBar ? 'none' : 'flex'
    }
  },
  badgeNotifications:{
    marginLeft:theme.spacing(2)
  },
  viewSearch:{
    [theme.breakpoints.up('sm')]:{
        display:'none'
    }
  },
  cancel:{
    [theme.breakpoints.up('sm')]:{
        display:'none'
    }
  }
}))

const Navbar2 = () => {
  
  const [openBar , setOpenBar] = useState(false)
  const classes = useStyles({openBar});
  return (
    <Container>
        <AppBar>
            <Toolbar className={classes.Toolbar}>
                <div className={classes.logo}>
                    <Typography variant='h5' className={classes.logoLg}>
                        Tailor Manager
                    </Typography>
                    <Typography variant='h5' className={classes.logoXs}>
                        Tailor MS
                    </Typography>
                </div>

                <div className={classes.searchBar}>
                    <SearchOutlined />
                    <InputBase style={{color:'white'}} placeholder='Search...' />
                    
                    <div className={classes.cancel}>
                        <Cancel onClick={() => setOpenBar(false)} />
                    </div>
                </div>

                <div className={classes.notifications}>
                    <div className={classes.viewSearch}>
                        <Badge className={classes.badgeNotifications}>
                            <SearchOutlined onClick={() => setOpenBar(true)} />
                        </Badge>
                    </div>
                    <Badge color='primary' className={classes.badgeNotifications} badgeContent={4}>
                        <Mail />
                    </Badge>
                    <Badge color='primary' className={classes.badgeNotifications} badgeContent={1}>
                        <Notifications />
                    </Badge>
                    <Badge className={classes.badgeNotifications}>
                        <Avatar src={profil} />
                    </Badge>
                </div>
            </Toolbar>
        </AppBar>
    </Container>
  );

}

export default Navbar2;
