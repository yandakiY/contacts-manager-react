import { Avatar, AvatarGroup, Container, Divider, ImageList, ImageListItem, Link, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import {makeStyles} from '@mui/styles'
import React from 'react';
import {img } from '../img/img.js'


const useStyles = makeStyles((theme) =>({
  container:{
    paddingTop: theme.spacing(10),
    borderLeft:'solid 1px silver',
    height:'100vh',
    position:'sticky',
    top:0
  },
  blockFriends:{
    // border:'solid 1px',
    paddingLeft:theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom:theme.spacing(2)
  },
  blocAvatar:{
    display:'flex'
  },
  galery:{
    paddingLeft:theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom:theme.spacing(2)
  },
  Link:{
    textAlign:'center'
  },
  itemLink:{
  }
}))

const RightBar2 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        
        <div className={classes.blockFriends}>
          <Typography style={{fontWeight:'bold' , color:'#555'}} variant='h6'>
            Friends online
          </Typography>
          <div className={classes.blocAvatar}>
            <AvatarGroup max={4}>
              <Avatar src={img.img1} />
              <Avatar src={img.img2}  />
              <Avatar src={img.img3} />
              <Avatar src={img.img4}/>
              <Avatar src={img.img5} />
              <Avatar src={img.img6} />
            </AvatarGroup>
          </div>
        </div>

        <div className={classes.galery}>
          <Typography style={{fontWeight:'bold' , color:'#555'}} variant='h6'>
            Galery
          </Typography>
          <div className={classes.blocImageList}>
              <ImageList cols={2} rowHeight={100} variant='standard'>
                <ImageListItem>
                  <img src={img.img1} alt=''/>
                </ImageListItem>
                <ImageListItem>
                  <img src={img.img2} alt=''/>
                </ImageListItem>
                <ImageListItem>
                  <img src={img.img5} alt=''/>
                </ImageListItem>
                <ImageListItem>
                  <img src={img.img3} alt=''/>
                </ImageListItem>
                <ImageListItem>
                  <img src={img.img6} alt=''/>
                </ImageListItem>
                <ImageListItem>
                  <img src={img.img4} alt=''/>
                </ImageListItem>
              </ImageList>
          </div>
        </div>

        <div className={classes.Link}>
            <Link style={{marginRight:'15px' , cursor:'pointer'}} className={classes.itemLink}>Sports</Link>
            <Link style={{marginRight:'15px' , cursor:'pointer'}} className={classes.itemLink}>Politique</Link>
            <Divider />
            <Link style={{marginRight:'15px' , cursor:'pointer'}} className={classes.itemLink}>Loisirs</Link>
            <Link style={{marginRight:'15px' , cursor:'pointer'}} className={classes.itemLink}>TV</Link>
        </div>

    </Container>
  );

}

export default RightBar2;
