import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  appBarSpacer: theme.mixins.toolbar,
  
  content: {
    minHeight: '100vh',
    flexGrow: 1,
  },
  posts :{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: theme.spacing(3),
  },
  cardPhotos:{
    maxWidth: '100%',
  },
  postContent:{
    padding: theme.spacing(2),
  },

  paper:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 100ms ease-in-out',
    '&:hover':{
      transform: 'scale(1.05)',
    }
  }

}));