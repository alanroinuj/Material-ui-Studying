import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SyncIcon from '@material-ui/icons/Sync';

import AlertDialog from '../Components/AlertDialog';
import  DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';


export default function MiniDrawer() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleDrawerOpen = () => {
    
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

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
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Pesquisar..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <section className={classes.postsContainer}>
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
        </section>
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
}