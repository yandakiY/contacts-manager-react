import { Container } from '@mui/system'
import React from 'react'
import {makeStyles} from '@mui/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import {img} from '../img/img.js'

const useStyles = makeStyles((theme) => ({
    container:{
    },
    media:{
        height:300,
        [theme.breakpoints.down('sm')]:{
            height:150
        }
    },
    card:{
        marginBottom:theme.spacing(2.5)
    },
    articleText:{
        color:'#555',
        [theme.breakpoints.down('sm')]:{
            fontSize:'10px',
            fontWeight:'bold'
        }
    }
  }))

const Post2 = ({post}) => {

    const classes = useStyles();
    return (
    <Container>
       <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    image={post ? post.img : img.img3}
                    className={classes.media}
                 />

                <CardContent>
                    <Typography style={{color:'#555'}} variant='h4' >
                        {post ? post.title : 'A Journey in my life'}
                    </Typography>
                    <Typography className={classes.articleText} variant='body2' component='p'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut voluptate eum harum accusamus consectetur? Debitis corporis obcaecati quae hic error, assumenda, consectetur exercitationem illo nisi, expedita voluptatum. Tenetur, optio.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut voluptate eum harum accusamus consectetur? Debitis corporis obcaecati quae hic error, assumenda, consectetur exercitationem illo nisi, expedita voluptatum. Tenetur, optio.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut voluptate eum harum accusamus consectetur? Debitis corporis obcaecati quae hic error, assumenda, consectetur exercitationem illo nisi, expedita voluptatum. Tenetur, optio.
                        Lorem ipsum dolor sit amet consectetur,
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant='outlined' color='error'>
                    Read More
                </Button>
                <Button variant='outlined' color='error'>
                    Share
                </Button>
            </CardActions>
       </Card>
    </Container>
  )
}

export default Post2