import { Container, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'
import React from 'react';
import Post2 from './Post2';
import {img} from '../img/img'
import AddPubli from './AddPubli';

const useStyles = makeStyles((theme) => ({
  title:{
    color:'pink'
  },
  container:{
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]:{
      paddingTop: theme.spacing(10)
    }
  }
}))

const Feed2 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        {/* <AddPubli /> */}
        {/* Introduire un component pour ajouter directement l'article sans le tooltip Add */}
        {/* Le tooltip disparaitra quand on sera a sm >> ; et a <<sm le component ajout direct disparaitra */}
        <Post2 post={ {title:'A journey in my life' , img:img.img3 } } />
        <Post2 post={ {title:'Javascript or/and Typescript ?' , img:img.img2 } } />
        <Post2 post={ {title:'React JS vs Vue JS' , img:img.img6 } }/>
        <Post2 post={ {title:"What's the best framework JS ?" , img:img.img1 } }/>
        <Post2 post={ {title:'Frontend or Backend ?' , img:img.img4} }/>
        <Post2 post={ {title:'Carbon, the new C++ made by Google' , img:img.img5 } }/>
    </Container>
  );

}

export default Feed2;
