import { MenuItem, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


const useStyles = makeStyles((theme) => ({
  InputBlock:{
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

const InputBlock = ({options , from , changeFrom , inputValue , changeValueInput , convert}) => {
    
  const classes = useStyles();
  return (
    <div className={classes.InputBlock}>
        <div>
            <Dropdown options={options} value={from} onChange={e => changeFrom(e.value)} placeholder='Devise' />
              
            </div>
            <div className={classes.inputValue}>
              <TextField value={inputValue} onKeyUp={convert} onChange={e => changeValueInput(e.target.value)} type="number" color='primary' placeholder="Value 1" variant='outlined'/> 
            </div>
    </div>
  )
}

export default InputBlock