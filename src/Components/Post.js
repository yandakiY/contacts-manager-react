import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'
import img1 from '../img/igor-miske-JVSgcV8_vb4-unsplash.jpg'

const useStyles = makeStyles((theme) => ({
    post:{
        marginTop: theme.spacing(1),
    },
    media:{
        height:300,
        [theme.breakpoints.down('sm')]:{
            height:150
        }
    },
    card:{
        marginBottom:theme.spacing(4)
    }

}))

const Post = () => {

  const classes = useStyles();
  return (
    <div className={classes.post}>
        {/* Hello World */}

        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img1}
                 />
                <CardContent>
                    <Typography variant='h4'>
                        My first Component : Card
                    </Typography>
                    <Typography  variant='body2' component='p'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut voluptate eum harum accusamus consectetur? Debitis corporis obcaecati quae hic error, assumenda, consectetur exercitationem illo nisi, expedita voluptatum. Tenetur, optio.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut voluptate eum harum accusamus consectetur? Debitis corporis obcaecati quae hic error, assumenda, consectetur exercitationem illo nisi, expedita voluptatum. Tenetur, optio.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut voluptate eum harum accusamus consectetur? Debitis corporis obcaecati quae hic error, assumenda, consectetur exercitationem illo nisi, expedita voluptatum. Tenetur, optio.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut voluptate eum harum accusamus consectetur? Debitis corporis obcaecati quae hic error, assumenda, consectetur exercitationem illo nisi, expedita voluptatum. Tenetur, optio.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut voluptate eum harum accusamus consectetur? Debitis corporis obcaecati quae hic error, assumenda, consectetur exercitationem illo nisi, expedita voluptatum. Tenetur, optio.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut voluptate eum harum accusamus consectetur? Debitis corporis obcaecati quae hic error, assumenda, consectetur exercitationem illo nisi, expedita voluptatum. Tenetur, optio.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>Learn more</Button>
                <Button size='small' color='primary'>Share</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default Post