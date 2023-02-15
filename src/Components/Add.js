import { Box, Button, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField , Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import MuiAlert from '@mui/material/Alert'
import React , {useState} from 'react'
import {Add as AddIcons} from '@mui/icons-material'
import { Container } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    add:{
        position:'fixed',
        bottom:50,
        right:45,
    },
    containerModal:{
        padding: theme.spacing(5),
        height:550,
        width:550,
        backgroundColor:'white',
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin:'auto'
    },
    itemsForm:{
        marginBottom:'15px'
    }
}))

const Add = () => {
const [open , setOpen] = useState(false)
const [openAlert , setOpenAlert] = useState(false)
const [visibility , setvisibility] = useState('Public')

const handleSendArticle = () =>{ //If on click create articles
    setOpenAlert(true)
    setOpen(false)
}

const handleClose = (e , reason) =>{ //If on Click close of SnackBar
    if(reason === 'clickaway'){
        return;
    }
    setOpenAlert(false)
}

const Alert = React.forwardRef(function Alert(props , ref) { //Creation d'un alert
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})


const handleChange = (e) =>{ //Change for TextField Select
    setvisibility(e.target.value)
}

const classes = useStyles();
  return (

    <>
         { /* Tooltip Component */}
        <div className={classes.add}>
            <Tooltip color='primary' onClick={() => setOpen(true)}>
                <Fab size='large'>
                    <AddIcons/>
                </Fab>
            </Tooltip>
        </div>

        {/* Modal Component  */}
        <Modal open={open}>
            <div className={classes.containerModal}>
                <Box sx={classes.box}>
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
                                <MenuItem onChange={handleChange} value="My friends">
                                    My friends
                                </MenuItem>
                                <MenuItem onChange={handleChange} value="Me">
                                    Me
                                </MenuItem>
                                <MenuItem onChange={handleChange} value="Everybody">
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
                            <Button variant='outlined' color='primary' onClick={handleSendArticle}>
                                Create
                            </Button>
                            <Button style={{marginLeft:'15px'}} variant='outlined' color='error' onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Box>
            </div>
        </Modal>

        {/* SnackBar Component  */}
        <Snackbar open={openAlert} onClose={handleClose} autoHideDuration={6000} anchorOrigin={{ vertical:'bottom' , horizontal:'left' }} >
            <Alert onClose={handleClose} severity='success'>Article send !!!</Alert>
        </Snackbar>
        

    </>
  )
}

export default Add