import { Box, Button, Checkbox, Container , FormControlLabel, Snackbar, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React , {useState} from 'react'
import {Save , CancelRounded} from '@mui/icons-material'
import MuiAlert from '@mui/material/Alert'

const useStyles = makeStyles((theme) => ({
  container:{
    borderRight:'solid 1px silver',
    padding: theme.spacing(2),
    marginTop:theme.spacing(10),
    // position:'sticky',
    // top: theme.spacing(15),
    [theme.breakpoints.down('sm')]:{
      marginTop:theme.spacing(-1),
    }
  },
  containerDiv:{
    position:'sticky',
    top: theme.spacing(15),
    display:'block',
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  },
  form:{
    marginTop:theme.spacing(2)
  },
  itemForm:{
    marginBottom:theme.spacing(2)
  },
  itemFormInput:{
    width:'75%'
  }
}))

const Alert = React.forwardRef(function Alert(props , ref){
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props}/>
})

const ContactForm = ({addContact}) => {
  const classes = useStyles();
  const [infoForm , setInfoForm] = useState({name:'', prename:'',number:'',fav:false});
  const [openAlert , setOpenAlert] = React.useState(false)
  const [checkValueNumber , setCheckValueNumber] = React.useState(false)
  const handleCloseAlert = (e , reason) =>{
    if(reason === 'clickaway'){
        return;
    }
    setOpenAlert(false);
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
    setOpenAlert(true)
  }

  const checkValueCondition = (e) =>{
    if(e.target.value.length === 10 ){ //If value is good (value.length === 10)
      setCheckValueNumber(true) 
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

    <div className={classes.containerDiv}>
          <Container className={classes.container}>
          <Typography variant='h5'>
              Register a contact :
          </Typography>

          <Box>
          <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
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
                    onChange={(e) => setInfoForm({...infoForm , fav:e.target.checked})}
                  />
              }
                />
            </div>
            <Button type='submit' endIcon={<Save />} color='primary' variant='contained'>
              Save
            </Button>
            <Button type='reset' style={{marginLeft:5}} endIcon={<CancelRounded />} color='error' variant='contained'>
              Cancel
            </Button>
          </form>
          </Box>
      </Container>
    </div>

      <Snackbar open={openAlert} onClose={handleCloseAlert} autoHideDuration={5000} anchorOrigin={{horizontal:'left' , vertical:'bottom'}}>
        <Alert severity='success' onClose={handleCloseAlert}>
              Contact added
          </Alert>
      </Snackbar>
    </>
    
  )
}

export default ContactForm