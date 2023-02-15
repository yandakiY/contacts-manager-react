import { Grid, MenuItem, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import InputBlock from './InputBlock'

const useStyles = makeStyles((theme) => ({
  InputBlock:{
    marginTop:theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
      marginTop:theme.spacing(5)
    }
  },
  inputValue:{
      marginTop:theme.spacing(2)
  }
  ,
  answerBlock:{
    border:'solid 1px',
    height:35,
    paddingTop:theme.spacing(2.0)
  },
  select:{
    width:'20%',
  }
}))

const HeightBlock = ({title , valueHeight , changeValueHeight , heightOptions , optionsSelect , changeOptionsSelect}) => {
  const classes = useStyles();

  const [valueConv , setValueConv] = React.useState({
    mm:1,
    cm:1,
    dm:1,
    m:1,
    pd:1,
    po:1
  })

  // const convert = () =>{
  //   setValueConv({
  //     metre:valueHeight,
  //     pieds:valueHeight,
  //     pouces:valueHeight
  //   })
  // }

  // console.log('Options ', heightOptions)

  // const convert = () =>{ //Change coefficient
  //   let valueSelect
  //   valueSelect = heightOptions.filter((height) => height.name === optionsSelect)
  //   // console.log('Value : ',value.value)
  //   let object
  //   let arrayNameValue = Object.keys(valueConv) //Array des names values
  //   valueSelect.forEach(element => {
  //     object = element
  //   });
  //   console.log(object.value) 
  //   // setValueConv() 
  //   // object.value.map((e) =>  )
  // }

  

  const handleChange = value =>{
    changeOptionsSelect(value)
    // convert()
  }

  return (
    <Grid container spacing={2}>
        <Grid style={{marginBottom:'15px'}} item lg={12} md={12}>
          <Typography variant='h5' style={{fontWeight:'bold'}}>
            {title ? 'Height Money :' : ''}
          </Typography>
        </Grid>


        <Grid item lg={12} md={12} sm={12} xs={12}>
          <TextField
                label="Value"
                select
                id='category'
                // style={{width:'100%'}}
                className={classes.select}
                value={optionsSelect}
                onChange={e => handleChange(e.target.value)}
          >
                {heightOptions.map((options , index) => 
                  <MenuItem key={index} value={options.name}>
                        {options.name} 
                  </MenuItem>
                  )  
                }
            </TextField>
            <div className={classes.inputValue}>
              {/* options select: {optionsSelect}  */}
              <TextField value={valueHeight} onChange={e => changeValueHeight(e.target.value)} type="number" color='primary' placeholder="Value 1" variant='outlined'/> 
            </div>
        </Grid>

        <Grid item lg={4} md={4} sm={4} xs={6}>
          <div className={classes.answerBlock}>
            {valueHeight ? valueHeight : '---'} Metre
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={6}>
          <div className={classes.answerBlock}>
            {valueHeight ? valueHeight : '---'} Pouces
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={6}>
          <div className={classes.answerBlock}>
            {valueHeight ? valueHeight : '---'} Pieds
          </div>
        </Grid>
    </Grid>
  )
}

export default HeightBlock