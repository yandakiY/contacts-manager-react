import { SwitchRight } from '@mui/icons-material'
import { Button, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import InputBlock from './InputBlock'
import axios from 'axios'
import InputBlock2 from './InputBlock2'

const useStyles = makeStyles((theme) => ({
  inputValue:{
    marginTop:theme.spacing(4)
  },
  btnSwitchXS:{
    display:'none',
    [theme.breakpoints.down('sm')]:{
      display:'block',
      marginTop:theme.spacing(2),
      margin:'auto'
    }
  },
  btnSwitchLG:{
    display:'block',
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  }
}))

const MoneyBlock = ({title}) => {

  // const options = [
  //   {
  //     'xof':'Franc CFA',
  //     'eur':'Euro',
  //     'usdt':'Dollar US',
  //   },
  // ]

  const classes = useStyles();
  const [options , setOptions] = React.useState([]) //Afficher les devises dans le dropdown
  const [info , setInfo] = React.useState([]) //Value index of devise who is choice . eg: from = eur , => eur/xof:656, eur/usg:1.02
  const [input , setInput] = React.useState(0) //Value of input
  const [output , setOutput] = React.useState(0) //Value of output depend of value of 'to'
  const [from , setFrom] = React.useState('xof') //value of from by default
  const [to , setTo] = React.useState('eur') //Value of 'to' by default

  const changeFrom = (value) =>{
    setFrom(value)
  }
  const changeTo = (value) =>{
    setFrom(value)
  }

  const changeValueOutput = () =>{
    // setOut
    convert()
  }

  React.useEffect(() => {
    axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
    .then((res) => setInfo(res.data[from])) // we let the properties date
  }, [from]);

  //When we switch a devise === conversion
  React.useEffect(() => {
    setOptions(Object.keys(info)) 
    //we get also the "id" (name of properties) of json what we are getting (for release on MenuItem of InputBlock)
    convert()
  }, [info]);


  // Convert the value , 
  const convert = () =>{
    const rate = info[to]; //Get the odd from the of all odds/money(devise) for devise 1 (from) and 
    setOutput(input * rate);
  }

  const changeValueInput = value =>{
    // const numberValue = Number(value)
    setInput(value);
    // convert()
  }
  //Switch from value to to value
  const switchDevise = () =>{
    const temp = from
    setFrom(to)
    setTo(temp)
    console.log(`Switch devise ${to} => ${temp}`)
  }


  return (
    <Grid container>
        <Grid style={{marginBottom:'15px'}} item lg={12} md={12}>
          <Typography variant='h5' style={{fontWeight:'bold'}}>
            {title ? 'Conversion Money :' : ''}
          </Typography>
        </Grid>

        <Grid className={classes.btnSwitchLG} item lg={12} md={12} sm={12} xs={12}>
          <Button onClick={() => switchDevise()} endIcon={<SwitchRight />} variant='outlined' color='info'>
            Switch
          </Button>
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <InputBlock inputValue={input} convert={convert} changeValueInput={changeValueInput} changeFrom={changeFrom} from={from} options={options} />
        </Grid>

        {/* <Divider /> */}
        <div className={classes.btnSwitchXS}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Button onClick={() => switchDevise()} endIcon={<SwitchRight />} variant='outlined' color='info'>
              Switch
            </Button>
          </Grid>
        </div>
        {/* <Divider /> */}
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <InputBlock2 outputValue={output} changeValueOutput={changeValueOutput} changeTo={changeTo} to={to} options={options} />
        </Grid>
    </Grid>
  )
}

export default MoneyBlock