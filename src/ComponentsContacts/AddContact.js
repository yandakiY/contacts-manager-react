import React from 'react'
import {makeStyles} from '@mui/styles'
import {Add} from '@mui/icons-material'
import { Fab, Modal, Tooltip, Typography , Button, Snackbar ,  Box, Checkbox , FormControlLabel, TextField } from '@mui/material';
import {Save , CancelRounded} from '@mui/icons-material'
import MuiAlert from '@mui/material/Alert'

const useStyles = makeStyles((theme) => ({
    Tooltip:{
        position:'fixed',
        bottom:65,
        right:18,
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    },
    divModal:{
        backgroundColor:'white',
        border:'solid 1px silver',
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin:'auto',
        height:400,
        width:450,
        padding:theme.spacing(1.5),
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]:{
            height:400,
            width:345,
        }
    },
    Box:{
        marginTop: theme.spacing(2)
    },
    itemForm:{
        marginBottom:theme.spacing(2)
    },
    itemFormInput:{
        width:'100%'
    },
    buttonSection:{
        textAlign:'center',
        marginTop: theme.spacing(2)
    }
}));


const Alert = React.forwardRef(function Alert(props , ref){
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props}/>
})


const AddContact = ({addContact}) => {
    const classes = useStyles();
    const [openModal , setOpenModal] = React.useState(false)
    const [openAlert , setOpenAlert] = React.useState(false)

    const [infoForm , setInfoForm] = React.useState({name:'' , prename:'' , number:'', fav:false});
    const [checkValueNumber , setCheckValueNumber] = React.useState(false)

    const handleCloseAlert = (e , reason) =>{
        if(reason === 'clickaway'){
            return;
        }
        setOpenAlert(false);
    }

    const handleSaveContact = () =>{
        setOpenModal(false)
        setOpenAlert(true)
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
    
        if(!infoForm.name || !infoForm.prename || !infoForm.number){
          alert('Remplissez les champs svp !!')
          return;
        }

        if(infoForm.number.length !== 10){
            alert('Number of telephone not validate !! (10 numbers) ')
            return;
        }
    
        addContact(infoForm)
    
        setInfoForm({
          name:'',
          prename:'',
          number:'',
          fav:false
        })

        handleSaveContact()
        // console.log(infoForm)
      }


      const checkValueCondition = (e) =>{
        if(e.target.value.length === 10){
          setCheckValueNumber(true) //If value is good (value.length === 10)
          setInfoForm({...infoForm , number:e.target.value})
          // return;
          // useState true
        }else{ //If value is other
          setCheckValueNumber(false)
          setInfoForm({...infoForm , number:e.target.value})
          // return;
        }
      }

    return (
        <>
            <div className={classes.Tooltip}>
                <Tooltip title='Add Button' color='primary' onClick={() => setOpenModal(true)} >
                    <Fab>
                        <Add />
                    </Fab>
                </Tooltip>
            </div> 

            <Modal className={classes.Modal} open={openModal}>
                <div className={classes.divModal}>
                    <Typography style={{textAlign:'center'}} variant='h4'>
                        Add a contact : 
                    </Typography>
                    
                    <Box className={classes.Box}>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className={classes.itemForm}>
                                <TextField
                                    label='Name'
                                    type='text'
                                    color='primary'
                                    variant='outlined'
                                    placeholder='Michel , Koffi ....'
                                    className={classes.itemFormInput}
                                    value={infoForm.name}
                                    onChange={(e) => setInfoForm({...infoForm , name:e.target.value})}
                                />
                            </div>

                            <div className={classes.itemForm}>
                                <TextField
                                    label='Prename'
                                    type='text'
                                    color='primary'
                                    variant='outlined'
                                    placeholder='Michel , Koffi ....'
                                    className={classes.itemFormInput}
                                    value={infoForm.prename}
                                    onChange={(e) => setInfoForm({...infoForm , prename:e.target.value})}
                                />
                            </div>

                            <div className={classes.itemForm}>
                                <TextField
                                    label='Number of mobile'
                                    type='number'
                                    color='primary'
                                    variant='outlined'
                                    placeholder=''
                                    className={classes.itemFormInput}
                                    value={infoForm.number}
                                    onChange={(e) => checkValueCondition(e)}
                                />
                                {(!checkValueNumber && infoForm.number !== '') && <Typography style={{fontWeight:'bold'}} variant='body2' color='error'>The number must be 10 digits</Typography>}
                            </div>

                            <div>
                                <FormControlLabel 
                                    label='Favoris'
                                    control={
                                    <Checkbox
                                        color='primary'
                                        checked={infoForm.fav}
                                        onChange={e => setInfoForm({...infoForm , fav:e.target.checked})}
                                    />
                                }/>
                                
                            </div>
                            
                            <div className={classes.buttonSection}>
                                <Button type='submit' endIcon={<Save />} color='primary' variant='contained'>
                                    Save
                                </Button>
                                <Button type='reset' style={{marginLeft:5}} endIcon={<CancelRounded />} color='error' variant='contained' onClick={() => setOpenModal(false)}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </Box>
                </div>

            </Modal>

            <Snackbar open={openAlert} autoHideDuration={5000} onClose={handleCloseAlert} anchorOrigin={{horizontal:'left' , vertical:'bottom'}}>
                <Alert severity='success' onClose={handleCloseAlert}>
                    Contact added
                </Alert>
            </Snackbar>
        </>
  )
}

export default AddContact