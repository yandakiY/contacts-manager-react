import { makeStyles } from '@mui/styles'
import React from 'react'
import Post from './Post'

const useStyles = makeStyles((theme) => ({
    feed:{
        marginTop:theme.spacing(9)
    }
}))

const Feed = () => {

  const classes = useStyles();
  return (
    <div className={classes.feed}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

    </div>
  )
}

export default Feed