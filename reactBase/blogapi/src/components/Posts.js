import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Container,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {

    },
    cardContent: {

    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    link: {
        margin: theme.spacing(1,1.5),
    },
    cardHeader: {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    postTitle: {
        fontSize: '16px',
        textAlign: 'left',
    },
    postText: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'baseline',
        fontSize: '12px',
        textAlign: 'left',
        marginBottom: theme.spacing(2),
    },
}))

const Posts = (props) => {
    const {posts} = props;
    const classes = useStyles();
    if (!posts || posts.length === 0 ) return (<p>Cannot find any posts, Please try later</p>);
    return (
        <React.Fragment>
            <Container maxWidth='md' component="main" >
                <Grid container spacing={5} alignItems="flex-end" >
                    {posts ? (posts.map((post) => {
                        return (
                            <Grid item key={post.id} xs={12} md={4} >
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="image-title" />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h6" component="h2" className={classes.postTitle}>
                                            {post.title ? (post.title.substr(0, 50)):null}...
                                        </Typography>
                                        <div className={classes.postText} >
                                            <Typography component="p" color="textPrimary">
                                            </Typography>
                                            <Typography component="p" variant="inherit" color="textSecondary">
                                                {post.excerpt ? (post.excerpt.substr(0, 60)):null}...
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>    
                            </Grid>
                        )
                    })):null}
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Posts;