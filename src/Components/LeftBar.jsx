import { Contacts, GraphicEqRounded, MusicVideo, PersonAdd, Settings, TravelExplore } from '@mui/icons-material';
import { Badge, Typography , alpha } from '@mui/material';
import { makeStyles  } from '@mui/styles'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    leftBar:{
        position:'sticky',
        top:0,
        paddingTop:theme.spacing(10),
        border:'solid 1px '+ alpha(theme.palette.common.black , 0.25) ,
        height:'100vh',
        backgroundColor: 'white',
        color: alpha(theme.palette.common.black , 0.60) ,
        width:'auto',
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            backgroundColor: theme.palette.primary.main,
            color:'white'
        }
    },
    iconLefBar:{
        display:'flex',
        alignItems:'center',
        marginBottom: theme.spacing(5),
        cursor:'pointer',
        [theme.breakpoints.down('sm')]:{
            marginBottom: theme.spacing(2),
            justifyContent:"center"
        }
    },
    titleIcons:{
        fontWeight:'bold',
        color: alpha(theme.palette.common.black , 0.80),
        marginLeft: '5px',
        fontFamily:'arial',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
}))

const LeftBar = () => {

    const classes = useStyles();
    return (
        <div className={classes.leftBar}>
            <div className={classes.iconLefBar}>
                <Badge badgeContent={3}>
                    <Contacts />
                </Badge>
                <div className={classes.titleIcons}>
                    <Typography variant='h6'>
                        Contacts
                    </Typography>
                </div>
                
            </div>
            <div className={classes.iconLefBar}>
                <Badge>
                    <PersonAdd />
                </Badge>
                <div className={classes.titleIcons}>
                    <Typography variant='h6'>
                        Add a contact
                    </Typography>
                </div>
                
            </div>
            <div className={classes.iconLefBar}>
                 <Badge>
                    <GraphicEqRounded />
                </Badge>
                <div className={classes.titleIcons}>
                    <Typography variant='h6' >
                        Statistics
                    </Typography>
                </div>
                
            </div>

            <div className={classes.iconLefBar}>
                 <Badge>
                    <MusicVideo />
                </Badge>
                <div className={classes.titleIcons}>
                    <Typography variant='h6' >
                        Songs
                    </Typography>
                </div>
                
            </div>
            <div className={classes.iconLefBar}>
                 <Badge>
                    <TravelExplore />
                </Badge>
                <div className={classes.titleIcons}>
                    <Typography variant='h6' >
                        Explorer
                    </Typography>
                </div>
                
            </div>
            <div className={classes.iconLefBar}>
                 <Badge>
                    <Settings />
                </Badge>
                <div className={classes.titleIcons}>
                    <Typography variant='h6' >
                        Settings
                    </Typography>
                </div>
                
            </div>
           
        </div>

  )
}

export default LeftBar