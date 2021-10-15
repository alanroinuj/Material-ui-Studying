import { makeStyles, alpha } from '@material-ui/core/Styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: '64px',
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    pading: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transistion: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },

  menuButtonHidden: {
    display: 'none',
  },

  title: {
    flexGrow: 1,
  },
  search:{
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#3f51b5',
  },
  
  inputRoot: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 0px 0px 1px #3f51b5',
    color: '#3f51b5',
  },
  inputInput: {
    
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '10ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },

  avatar: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },
}));

export default useStyles;
