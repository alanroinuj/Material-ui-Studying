import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
  },

  appBarSpacer: theme.mixins.toolbar,

  content: {
    minHeight: '100vh',
    flexGrow: 1,
    padding: theme.spacing(3),
    background: '#eee',
  },
  
  input: {
    margin: theme.spacing(1),
  },
  nameInput:{
    width: '80%',
  }
}));

export default useStyles;