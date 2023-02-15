import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Header from './Component-conversion/Header'
import SelectType from './Component-conversion/SelectType'
import apiHeight from './api/apiHeight'
import apiType from './api/apiType'
import MoneyBlock from './Component-conversion/MoneyBlock'
import HeightBlock from './Component-conversion/HeightBlock'
import WeightBlock from './Component-conversion/WeightBlock'

const useStyles = makeStyles((theme) =>({
    gridBlock:{
        marginTop:theme.spacing(10),
        // border:'solid 1px',
        // padding:theme.spacing(2)
        // padding:theme.spacing(2)
    },
    blockConversationMain:{
        
    },
    blockConversation:{
        border:'solid 1px',
        width:'50%',
        marginTop:theme.spacing(10),
        margin:'auto',
        padding:theme.spacing(5),
        textAlign:'center',
        
    }
}))

const AppConversion = () => {

  const classes = useStyles();
  const [types , setTypes] = React.useState([]);
  const [theType , setTheType] = React.useState('');
  const [valueHeight , setValueHeight] = React.useState(0);
  const [heightOptions , setHeightOptions] = React.useState([])
  const [optionsSelect , setOptionsSelect] = React.useState('m')

  React.useEffect(() => {
    const getHeightFromServer = async () =>{
        const heightLists = await getHeight();
        if(heightLists){
            setHeightOptions(heightLists)
        }
    }
    getHeightFromServer();
  }, []);

  const getHeight = async () =>{
    const heightLists = await apiHeight.get();
    return heightLists.data
  }

  const changeOptionsSelect = (value) =>{
    setOptionsSelect(value)
  }


  const changeValueHeight = (value) =>{
    setValueHeight(value);
    console.log(valueHeight)
  }

  const handleChangeSelect = (value) =>{ //Select Type
    setTheType(value);
    console.log('Value choice : ' , value)
  }
  
  React.useEffect(() =>{
    const getTypesFromServer = async () => {
        const typesFromServer = await getTypes();
        if(typesFromServer){
            setTypes(typesFromServer)
        }
    }   
    getTypesFromServer()
  } , [])

    const getTypes = async () => {
        const types = await apiType.get();
        return types.data;
    }

 
  return (
    <div>
        <Header />
        <Grid container className={classes.gridBlock}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <SelectType handleChangeSelect={handleChangeSelect} types={types} />
            </Grid>
            {/* style={{marginTop:'50px'}} */}
            <Grid className={classes.blockConversationMain} item lg={12} md={12} sm={12}>
                
                <div className={classes.blockConversation}>
                    {theType === 'Money' && <MoneyBlock title={theType} />}
                    {/* {theType === 'Height' && <HeightBlock heightOptions={heightOptions} optionsSelect={optionsSelect} changeOptionsSelect={changeOptionsSelect} valueHeight={valueHeight} changeValueHeight={changeValueHeight} title={theType} />}
                    {theType === 'Weight' && <WeightBlock title={theType} />} */}
                    {theType === '' && <div>Choose your Conversion what do you want</div>}
                </div>
                
            </Grid>
            {/* Make the component of Conversion depend of the type who choice */}
        </Grid>
    </div>
  )
}

export default AppConversion