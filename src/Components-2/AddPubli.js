import { Container, Containerider } from '@mui/material'
import { red } from '@mui/material/colors'
import {makeStyles} from '@mui/styles'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    AddPubli:{
        backgroundColor:red[300],
        position:'fixed',
        top:50,
        right:450,
        border:'solid 1px'+red[300],
        borderRadius:theme.shape.borderRadius,
        padding:theme.spacing(2),
        marginTop:theme.spacing(2.5),
        marginBottom:theme.spacing(3),
        zIndex:1,
        height:250,
        width:705,
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
}))

const AddPubli = () => {
  
    const classes = useStyles();
  return (
    <div className={classes.AddPubli}>
            AddPubli
    </div>
  )
}

export default AddPubli