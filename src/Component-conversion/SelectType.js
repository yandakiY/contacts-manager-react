import { MenuItem, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    blockMain:{
        border:'solid 1px',
    },
    Select:{
        width:'45%',
        margin:'auto',
        [theme.breakpoints.down('sm')]:{
            width:'75%',
            margin:'auto'
        }
    }
}))

const SelectType = ({types , handleChangeSelect}) => {

    const classes = useStyles();

    return (
    <div className={classes.Select}>
        {!types ? 
            (
                <div className={classes.itemsForm}>
                    <Typography variany='h5'>
                        Not types found here
                    </Typography>
                </div>
            ) 
        :
            (
                <div className={classes.itemsForm}>
                    <TextField
                        label="Type : "
                        select
                        id='category'
                        style={{width:'100%'}}
                        defaultValue=''
                        onChange={e => handleChangeSelect(e.target.value)}
                    >
                        {types.map(type => 
                                <MenuItem key={type.id} value={type.type_name} >
                                    {type.type_name}
                                </MenuItem>
                            )
                        }
                    </TextField>
                </div>
            )
        }
    </div>
  )
}

export default SelectType