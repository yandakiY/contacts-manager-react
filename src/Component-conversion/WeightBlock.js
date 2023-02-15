import { Grid, Typography } from '@mui/material'
import React from 'react'
import InputBlock from './InputBlock'

const WeightBlock = ({title}) => {
  return (
    <Grid container>
        <Grid style={{marginBottom:'15px'}} item lg={12} md={12}>
          <Typography variant='h5' style={{fontWeight:'bold'}}>
            {title ? 'Weight Money :' : ''}
          </Typography>
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <InputBlock />
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <InputBlock />
        </Grid>
    </Grid>
  )
}

export default WeightBlock