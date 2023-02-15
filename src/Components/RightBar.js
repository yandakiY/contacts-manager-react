import { alpha, Avatar, AvatarGroup, Divider, ImageList, ImageListItem, Link, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'
import img1 from '../img/patrick-fore-0_AX9pab940-unsplash.jpg'
import img2 from '../img/adrien-olichon-_UuN_2ixJvA-unsplash.jpg'
import img3 from '../img/amy-shamblen-651683-unsplash.jpg'
import img4 from '../img/laurent-venerosy-af7UAJzQJgY-unsplash.jpg'
// import { div } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    rightBar:{
        paddingTop: theme.spacing(10),
        position:'sticky',
        top:0,
    },
    title:{
      textDecoration:'underline',
      fontWeight:'bold',
      // color:'#fffff', 
    },
    divRightBar:{
      marginLeft:10,
      marginRight:10,
      marginBottom:15,
      paddingLeft:5,
      paddingBottom:5,
    },
    AvatarGroup:{
      display:'flex',
    },
    divRightBar:{
      cursor:'pointer'
    }
}))

const RightBar = () => {

    const classes = useStyles();
  return (
    <div className={classes.rightBar}>
      <div className={classes.divRightBar}>
        <Typography style={{fontSize:20, fontWeight:'bold'}} className={classes.title}>My Friends</Typography>
        
        <div className={classes.AvatarGroup}>
          <AvatarGroup max={4}>
            <Avatar sizes='25' src={img1} />
            <Avatar src={img2} />
            <Avatar src={img3} />
            <Avatar src={img4} />
            <Avatar src='' />
            <Avatar src='' />
          </AvatarGroup>
        </div>
      </div>

      <div className={classes.divRightBar}>
        <Typography style={{fontSize:20, fontWeight:'bold'}} className={classes.title}>Galery</Typography>
        <ImageList variant='quilted' rowHeight={135} cols={2}>
          <ImageListItem rows={1} cols={1}>
            <img alt=''  src={img1}/>
          </ImageListItem>
          <ImageListItem rows={1} cols={1}>
            <img alt='' src={img2} />
          </ImageListItem>
          <ImageListItem rows={1} cols={1}>
            <img alt='' src={img3}/>
          </ImageListItem>
          <ImageListItem rows={1} cols={1}>
            <img alt='' src={img1}/>
          </ImageListItem>
          <ImageListItem rows={1} cols={1}>
            <img alt='' src={img4}/>
          </ImageListItem>
          <ImageListItem rows={1} cols={1}>
            <img alt='' src={img2}/>
          </ImageListItem>
        </ImageList>
      </div>

      <div className={classes.divRightBar}>
        <Link style={{color:'#555' , marginRight:10}} className={classes.linkItems}>Sports</Link>
        <Link style={{color:'#555' , marginRight:10}} className={classes.linkItems}>Loisirs</Link>
        <Divider />
        <Link style={{color:'#555' , marginRight:10}} className={classes.linkItems}>Politique</Link>
        <Link style={{color:'#555' , marginRight:10}} className={classes.linkItems}>Techs</Link>
        <Divider />
        <Link style={{color:'#555' , marginRight:10}} className={classes.linkItems}>Politique</Link>
        <Link style={{color:'#555' , marginRight:10}} className={classes.linkItems}>Techs</Link>
      </div>

    </div>
  )
}

export default RightBar