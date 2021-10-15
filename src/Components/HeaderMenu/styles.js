import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
const drawerMargin = 72;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '64px',
    position: 'absolute',
    background: '#f1f1f1',
   boxShadow: '0px 2px 4px 0px rgb(0 0 0 / 20%)',
  },
  subHeaderShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,

    transistion: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  marginShift: {
    marginLeft: drawerMargin,
    width: `calc(100% - ${drawerMargin}px)`,
  },

  container: {
    display: 'flex',
  },

}));

export default useStyles;
