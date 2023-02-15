import React from 'react'
import {Avatar, Box, Button, Checkbox, Container , FormControlLabel, IconButton, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Modal, Snackbar, TextField, Typography} from '@mui/material'
import { CancelRounded, Delete,  Mode , MoreVert, Save } from "@mui/icons-material"
import {makeStyles} from '@mui/styles'
import MuiAlert from '@mui/material/Alert'

let counter = 0;

const Alert = React.forwardRef(function Alert(props , ref){
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props}/>
})

const useStyles = makeStyles((theme) => ({
    ListItem:{
        border:'solid 1px',
        marginBottom:5,
    },
    container:{
        [theme.breakpoints.down('sm')]:{
            marginTop: theme.spacing(-2)
        }
    },
    ListItemFirstPart:{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'silver',
        marginRight: '60%',
        padding: 2,
        color:'black'
    },
    ListItemSecondPart:{
        // display:'flex',
        // justifyContent:'space-between',
        backgroundColor:'#556',
        color:'whitesmoke',
        padding: theme.spacing(0.2),
        width:'45%',
        [theme.breakpoints.down('sm')]:{
            width:'65%',
        }
    },
    primaryPart:{
        display:'flex',
        justifyContent:'space-between',
        
    },
    titleContainer:{
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    icons:{
        border:'solid 1px',
        textAlign:'right',
        // On fait disparaitre kes icons dans l'optique de faire apparaitre
        // un icons button Menu with menuitem
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    iconsXS:{
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    },
    iconsItem:{
        width:105,
        height: 45
    },
    ListItemText:{
        display:'flex'
    },
    typography:{
    },
    // Modal CSS
    divModal:{
        backgroundColor:'white',
        border:'solid 1px silver',
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin:'auto',
        height:450,
        width:450,
        padding:theme.spacing(1.5),
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]:{
            height:455,
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
}))

const ContactListItem = ({contact , deleteContact , updateContact}) => {

    let networkName = '';
    const classes = useStyles();
    const [anchorEl , setAnchorEl] = React.useState(null);
    const [openModal , setOpenModal] = React.useState(false)
    const [infoForm , setInfoForm] = React.useState({id:contact.id , name:contact.name , prename:contact.prename ,number:contact.number , fav:contact.fav})
    const [openAlert , setOpenAlert] = React.useState(false)
    const [checkValueNumber , setCheckValueNumber] = React.useState(false)
    const open = Boolean(anchorEl)

    const handleCloseAlert = (e , reason) =>{
        if(reason === 'clickaway'){
            return;
        }
        setOpenAlert(false)
    }

    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () =>{
        setAnchorEl(null)
    }

    const handleCloseDelete = () =>{
        deleteContact(contact.id)

        setAnchorEl(null)
    }

    const handleCloseUpdate = () =>{ //Fermer le Modal 
        //On rend la liste invisible
        // setAnchorEl(null)$

        //Affichage du modal
        
        setOpenModal(false)
        setInfoForm({id:contact.id , name:contact.name , prename:contact.prename , number:contact.number , fav:contact.fav})
        setAnchorEl(null)
    }

    const handleUpdate = (e) =>{
        e.preventDefault();

        if(!infoForm.name || !infoForm.prename || !infoForm.number){
            alert('Input field is required')
            return;
        }

        if(infoForm.number.length !== 10){
            alert('Number of telephone not validate !! (10 numbers) ')
            return;
        }

        updateContact(infoForm);
        // handleCloseUpdate()
        setOpenModal(false)
        setAnchorEl(null)
        setOpenAlert(true);
    }

    const chooseNetworkName = (number) =>{

        const numberReceived = number;

        if(numberReceived.startsWith('07') || numberReceived.startsWith('08') || numberReceived.startsWith('09') || numberReceived.startsWith('47') || numberReceived.startsWith('48')){
            networkName = 'Orange CI'
        }else if (numberReceived.startsWith('05') || numberReceived.startsWith('04') || numberReceived.startsWith('06') || numberReceived.startsWith('44') || numberReceived.startsWith('45')){
            networkName = 'MTN CI'
        }
        else if (numberReceived.startsWith('03') || numberReceived.startsWith('01') || numberReceived.startsWith('02') || numberReceived.startsWith('03') || numberReceived.startsWith('40') ){
            networkName = 'Moov Africa'
        }
        else{
            networkName = 'Network not found'
        }

        return networkName
        //Return the name of the network
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
        <ListItem className={classes.ListItem}>
                        <ListItemAvatar>
                            <Avatar src='' />
                        </ListItemAvatar>
                        
                        <ListItemText secondary={
                            <div className={classes.ListItemSecondPart}>
                                <Typography>
                                    {contact ? contact.number : '+225 0564916663 '}
                                </Typography>
                                <Typography style={{fontWeight:'bold', color: (
                                    chooseNetworkName(contact.number) === 'Orange CI' ? 'orange' : '' || chooseNetworkName(contact.number) === 'MTN CI' ? 'yellow' : '' || chooseNetworkName(contact.number) === 'Moov Africa' ? 'skyblue' : ''
                                ) }}>
                                    {/* Orange CI  */}
                                    {/* Use the function  */}
                                    {chooseNetworkName(contact.number)}
                                </Typography>
                            </div>
                        }
                        >
                            <div className={classes.primaryPart}>
                                <Typography variant='h6'>
                                    {contact ? contact.name + ' ' + contact.prename : 'Boa Yandaki Yves Michel '}
                                </Typography>

                                <div className={classes.icons}>
                                    <Delete onClick={() => deleteContact(contact.id)} style={{cursor:'pointer',height:35,width:35}} color='error' />
                                    <Mode onClick={() => setOpenModal(true)} style={{cursor:'pointer',height:35,width:35}} color='primary' />
                                </div>
                                <div className={classes.iconsXS}>
                                    <IconButton
                                        id='long-button'
                                        aria-controls={open ? 'long-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
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
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style:{
                                                width:'20ch'
                                            }
                                        }}
                                    >
                                        <MenuItem color='error' onClick={handleCloseDelete}>
                                            Delete
                                        </MenuItem>
                                        <MenuItem onClick={() => setOpenModal(true)}>
                                            Update
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </div>
                        </ListItemText>
        </ListItem>

        {/* Modal Part Update contact */}
        {/* Modal Part Update contact */}
        {/* Modal Part Update contact */}
        
        <Modal className={classes.Modal} open={openModal}>
                <div className={classes.divModal}>
                    <Typography style={{textAlign:'center'}} variant='h4'>
                        Update contact : 
                    </Typography>
                    
                    <Box className={classes.Box}>
                        <form onSubmit={(e) => handleUpdate(e)}>

                            <div className={classes.itemForm}>
                                <TextField
                                    label='ID'
                                    type='number'
                                    color='primary'
                                    variant='outlined'
                                    placeholder='ID'
                                    className={classes.itemFormInput}
                                    value={infoForm.id}
                                    disabled
                                    // onChange={(e) => setInfoForm({...infoForm , number:e.target.value})}
                                />
                            </div>

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
                                    className={classes.itemFormInput}
                                    value={infoForm.number}
                                    onChange={(e) => checkValueCondition(e)}
                                />
                                {(infoForm.number.length === 10) ? '' : <Typography style={{fontWeight:'bold'}} variant='body2' color='error'>The number must be 10 digits</Typography>}
                            </div>

                            <div>
                                <FormControlLabel 
                                    label='Favoris'
                                    control={ 
                                    <Checkbox
                                        color='primary'
                                        checked={infoForm.fav}
                                        onClick={(e) => setInfoForm({...infoForm , fav:e.target.checked})}
                                    />
                                }/>
                            </div>
                            
                            <div className={classes.buttonSection}>
                                <Button type='submit' endIcon={<Save />} color='primary' variant='contained'>
                                    Update
                                </Button>
                                <Button type='reset' style={{marginLeft:5}} endIcon={<CancelRounded />} color='error' variant='contained' onClick={handleCloseUpdate}>
                                    Close
                                </Button>
                            </div>
                            {/* <p>{counter > 0 ? '' : `Render : ${counter++}`}</p> */}
                        </form>
                    </Box>
                </div>

            </Modal>

            <Snackbar autoHideDuration={5000} onClose={handleCloseAlert} anchorOrigin={{horizontal:'left' , vertical:'bottom'}} open={openAlert} >
                <Alert severity='success' onClose={handleCloseAlert}>
                    Contact Update
                </Alert>
            </Snackbar>
    </>
  )
}

export default ContactListItem