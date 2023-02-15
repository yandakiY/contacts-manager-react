import { alpha, AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React , {useState} from 'react'
import {  MailOutline, Notifications, Search, SearchOutlined , Close } from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        justifyContent:'space-between'
    },
    Navbar:{
        marginTop: theme.spacing(2)
    },
    titleSm:{
        display:'block',
        color: 'floralwhite',
        [theme.breakpoints.up('sm')]:{
            display:'none'
        },
        fontWeight:'bold',
    },
    titleLg:{
        display:'block',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    search:{
        display:'flex',
        alignItems:'center',
        width:'50%',
        backgroundColor: alpha(theme.palette.common.white , 0.15),
        '&:hover':{
            backgroundColor: alpha(theme.palette.common.white , 0.25)
        },
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]:{
            display: (props) => props.viewSearch ? 'flex' : 'none',
            width:'65%'
        },
    },
    closeButtonSearch:{
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    },
    input:{
        color:"white",
        width:'auto'
    },
    icons:{
        cursor:'pointer',
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.down('sm')]:{
            display: (props) => props.viewSearch ? 'none' : 'flex'
        }
    },
    badge:{
        marginRight: theme.spacing(2)
    },
    searchButton:{
        display:'none',
        marginRight: theme.spacing(1),
        [theme.breakpoints.down('sm')]:{
            display: (props) => props.viewSearch ? 'none' : 'flex'
        },
    },
    
}));


const Navbar = () => {
  
  const [viewSearch , setViewSearch] = useState(false);
  const classes = useStyles({viewSearch});

  return (
    // <div className={classes.Navbar}>
        <AppBar>
            <Toolbar className={classes.container}>
                
                {/* Part of Logo  */}
                <Typography variant='h6' className={classes.titleSm}>
                    Michel Dev
                </Typography>
                <Typography variant='h6' className={classes.titleLg}>
                    Michel Yandaki
                </Typography>

                {/* BarSearch  */}
                <div className={classes.search}>
                    <SearchOutlined />
                    <InputBase placeholder='Search...' className={classes.input}/>
                    <div className={classes.closeButtonSearch}>
                        <Close onClick={() => setViewSearch(false)}/>
                    </div>
                </div>
                    
                
                {/* Part of icons  */}
                <div className={classes.icons}>
                    <div className={classes.searchButton}>
                        <Search onClick={() => setViewSearch(true)} />
                    </div>
                    <Badge badgeContent={4} color='error' className={classes.badge}>
                        <MailOutline />
                    </Badge>
                    <Badge badgeContent={4} color='error' className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar alt='Profil' />
                </div>
            
            </Toolbar>
        </AppBar>
    // </div>
  )
}

export default Navbar