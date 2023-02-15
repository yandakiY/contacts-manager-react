import { MoreVert } from '@mui/icons-material';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'


const useStyles = makeStyles((theme) => ({
  toolbar:{
    display:'flex',
    justifyContent:'space-between'
  },
  titleToolbarLG:{
    display:'block',
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  },
  titleToolbarXS:{
    display:'block',
    [theme.breakpoints.up('sm')]:{
      display:'none'
    }
  },
  links:{
    color:'blue',
    display:'flex',
    justifyContent:'space-between',
    alignContent:'center',
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  },
  linkitems:{
    cursor:'pointer',
    '&:hover':{
      borderBottom:'solid .5px'
    },
  },
  optionsLinks:{
    [theme.breakpoints.up('sm')]:{
      display:'none'
    }
  }

}))

const Header = () => {

  const [anchorEl , setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl)

  const handleClick = (e) =>{
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () =>{
    setAnchorEl(null);
  }

  const classes = useStyles();
  return (
    <AppBar href='#' color='default'>
      <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Typography variant='h4' style={{fontWeight:'bold'}}  className={classes.titleToolbarLG}>
              Conversion App
            </Typography>
            <Typography variant='h4' style={{fontWeight:'bold'}} className={classes.titleToolbarXS}>
              Conversion
            </Typography>
          </div>
          <div className={classes.links}>
            <Typography className={classes.linkitems} style={{marginRight:'25px',fontWeight:'bold'}}>Qui nous sommes ?</Typography>
            <Typography className={classes.linkitems} style={{marginRight:'25px',fontWeight:'bold'}}>Nous contacter</Typography>
          </div>
          <div className={classes.optionsLinks}>
            {/* optionsLinks */}

              <IconButton
                    id='long-button'
                    aria-controls={open ? 'long-menu' : undefined} // Determine the id of the MenuItem
                    aria-expanded={open ? 'true' : undefined} //Who control the release of menu
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                <MoreVert />
              </IconButton>
              <Menu
                  id='long-menu'
                  MenuListProps={{
                    "aria-labelledby":"long-button"
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  PaperProps={{
                    style:{
                      width:'20ch'
                    }
                  }}
                >
                  <MenuItem>
                      Qui sommes nous ?
                    </MenuItem>
                    <MenuItem>
                      Nous Contactez
                    </MenuItem>
                </Menu>
          </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header