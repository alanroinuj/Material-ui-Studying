import React, {useState, useEffect} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CssBaseline from '@material-ui/core/CssBaseline';

import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SyncIcon from '@material-ui/icons/Sync';

import AlertDialog from '../../Components/AlertDialog';
import  DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';


import { useStyles } from './styles';
import Header from '../../Components/Header';
import Sidebar from '../../Components/SideBar';
import { Container } from '@material-ui/core';


const MiniDrawer = () => {

  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleDialogOpen = () =>{
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const fetchPosts = async () =>{
    const responsePosts = await (
      await fetch('https://jsonplaceholder.typicode.com/posts'));
    const responsePhotos = await (
        await fetch('https://jsonplaceholder.typicode.com/photos'));

    const [posts, photos ] = await Promise.all([responsePosts, responsePhotos]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) =>{
      return {...post, cover: photosJson[index].url}
    });
    setPosts(postsAndPhotos);
  };

  useEffect(() => {
    fetchPosts();
  },[]);

  console.log(posts);

  return (

    <div className={classes.root}>
      <CssBaseline />
      <Header/>
      <Sidebar/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <div className={classes.appBarSpacer}/>
        <Container>
        <div className={classes.posts}>
              {posts.map(post => (
                <Card className={classes.paper}>
                  <img src={post.cover} alt={post.title} className={classes.cardPhotos} />
                  <CardContent key={post.id} className={classes.postContent}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                  </CardContent>
                  <CardActions>
                  <IconButton>
                    <SyncIcon style={{color: 'green'}}/>
                    </IconButton>
                    <div>
                    <IconButton>
                      <EditIcon/>
                    </IconButton>
                    <IconButton>
                      <DeleteIcon onClick={handleDialogOpen} color="error"/>
                    </IconButton>
                    </div>
                  </CardActions>
                </Card>
              ))}
            </div>
        </Container>
        <AlertDialog 
        open={openDialog}
        close={handleDialogClose}>
            <DialogActions>
          <Button  color="primary">
            Sim
          </Button>
          <Button onClick={handleDialogClose} color="primary">
            Não
          </Button>
        </DialogActions>
          </AlertDialog>
      </main>
    </div>
  );
};

export default MiniDrawer;