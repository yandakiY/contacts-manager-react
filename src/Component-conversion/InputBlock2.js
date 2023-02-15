import { MenuItem, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';


const useStyles = makeStyles((theme) => ({
  InputBlock2:{
    marginTop:theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
      marginTop:theme.spacing(5)
    }
  },
  inputValue:{
      marginTop:theme.spacing(2)
  },
  inputSelect:{
    width:'50%',
    [theme.breakpoints.down('sm')]:{
      width:'95%'
    }
  }
}))

const InputBlock2 = ({options , to , changeTo , outputValue}) => {
    
  const classes = useStyles();
  // console.log('Input value block 2',typeof outputValue);
  return (
    <div className={classes.InputBlock2}>
            <div>
              <Dropdown options={options} value={to} onChange={e => changeTo(e.value)} placeholder='Devise' />
            </div>
            <div className={classes.inputValue}>
              <TextField value={outputValue} type="number" color='primary' placeholder="Value 1" variant='outlined'/> 
            </div>
    </div>
  )
}

export default InputBlock2