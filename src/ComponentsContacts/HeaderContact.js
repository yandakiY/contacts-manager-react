import React from 'react'
import { makeStyles } from '@mui/styles'
import { alpha, AppBar, InputBase, Toolbar, Typography } from '@mui/material';
import { Search , Cancel } from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({
    AppBar:{
        // background:blue[500]
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    titleXS:{
        display:'none',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    },
    titleLG:{
        display:'block',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    search:{
        display:'flex',
        alignItems:'center',
        backgroundColor: alpha(theme.palette.common.black , 0.25),
        '&:hover':{
            backgroundColor:alpha(theme.palette.common.black , 0.30)
        },
        padding:theme.spacing(1),
        borderRadius:8,
        [theme.breakpoints.down('sm')]:{
            marginLeft:theme.spacing(2)
        }
        
    },
    // iconsSearch:{
    //    display: (props) => props.openBarSearch ? 'none' : 'flex'
    // }
}))

const HeaderContact = ({inputSearch , changeValue}) => {
    
    const [openBarSearch , setopenBarSearch] = React.useState(false);
    const classes = useStyles({openBarSearch});

    return (
    <AppBar color='primary'>
        <Toolbar className={classes.AppBar}>
            <div className={classes.title}>
                <Typography variant='h4' className={classes.titleXS}>
                    Contacts
                </Typography>
                <Typography variant='h4' className={classes.titleLG}>
                    Contacts Manager
                </Typography>
            </div>
            {openBarSearch && 
                <div className={classes.search}>
                        <Search />
                        <InputBase placeholder='Search...' style={{color:'white'}} value={inputSearch} onChange={(e) => changeValue(e.target.value)} />
                    
                        <Cancel onClick={() => setopenBarSearch(false)} style={{cursor:'pointer'}} />
                </div>
            }
            {!openBarSearch && <div className={classes.iconsSearch}>
                <Search onClick={() => setopenBarSearch(true)} style={{cursor:'pointer'}}/>
            </div>}
        </Toolbar>
    </AppBar>
  )
}

export default HeaderContact