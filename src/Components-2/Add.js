import { Box, Button, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip, Typography } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import React , {useState} from 'react'
import {makeStyles} from '@mui/styles'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props , ref){
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})


const useStyles = makeStyles((theme) =>({
    tooltip:{
        position:'fixed',
        bottom:80,
        right:120,
        [theme.breakpoints.down('sm')]:{
            position:'fixed',
            bottom:20,
            right:20,
        }
    },
    
    blockModal:{
        backgroundColor:'white',
        height:650,
        width:500,
        margin:'auto',
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]:{
            height:650,
            width:350,
        }
        
    },
    itemsForm:{
        padding:theme.spacing(1)
    }
}))

const Add = () => {
  const classes = useStyles()
  const [openModal , setOpenModal] = useState(false);
  const [openAlert , setOpenAlert] = useState(false);

  const handleCloseAlert = (e,resason) =>{
    if(resason === 'clickaway'){
        return;
    }
    setOpenAlert(false)
  }

  const handleSendMessage = () =>{
    setOpenModal(false)
    setOpenAlert(true)
  }

  return (
    <>
        <div className={classes.tooltip} >
            <Tooltip color='primary' onClick={() => setOpenModal(true)} >
                <Fab>
                    <AddIcon />
                </Fab>
            </Tooltip>
        </div>

        <Modal open={openModal} className={classes.modal}>
            <div className={classes.blockModal}>
                <Typography style={{textAlign:'center',textDecoration:'underline'}} variant='h4'>
                    What's happened !?
                </Typography>
                <Box>
                    <form>
                    <div className={classes.itemsForm}>
                            <TextField size='small' label='Title :' style={{width:'100%'}} type='text' placeholder=''/>
                        </div>
                        <div className={classes.itemsForm}>
                            <TextField size='small' label='Description :' style={{width:'100%'}} type='text' placeholder=''/>
                        </div>
                        <div className={classes.itemsForm}>
                            <TextField 
                                label="What's Happens !?"
                                rows={4}
                                style={{width:'100%'}}
                                multiline
                                variant='outlined'
                                defaultValue=''
                             />
                        </div>
                        <div className={classes.itemsForm}>
                            <TextField
                                label="Visbility: "
                                select
                                id='category'
                                style={{width:'100%'}}
                            >
                                <MenuItem onChange="" value="My friends">
                                    My friends
                                </MenuItem>
                                <MenuItem onChange="" value="Me">
                                    Me
                                </MenuItem>
                                <MenuItem onChange="" value="Everybody">
                                    Everybody
                                </MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.itemsForm}>
                            <FormLabel>Who can comment ?</FormLabel>
                                <RadioGroup>
                                    <FormControlLabel
                                        value='Also Me'
                                        control={<Radio />}
                                        label='Also Me'
                                    />
                                    <FormControlLabel
                                        value='Nobody'
                                        control={<Radio />}
                                        label='Nobody'
                                    />
                                    <FormControlLabel
                                        value='Everybody'
                                        control={<Radio />}
                                        label='Everybody'
                                    />
                                </RadioGroup>
                        </div>
                        <div className={classes.itemsForm}>
                            <Button variant='outlined' color='primary' onClick={handleSendMessage}>
                                Create
                            </Button>
                            <Button style={{marginLeft:'15px'}} variant='outlined' color='error' onClick={() => setOpenModal(false)}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Box>
            </div>
        </Modal>

        <Snackbar anchorOrigin={{ vertical:'bottom' , horizontal:'left' }} open={openAlert} autoHideDuration={5000} onClose={handleCloseAlert}>
            <Alert severity='success' onClose={handleCloseAlert} sx={{width:'100%'}} >
                Message send !!!
            </Alert>
        </Snackbar>
    </>
  )
}

export default Add