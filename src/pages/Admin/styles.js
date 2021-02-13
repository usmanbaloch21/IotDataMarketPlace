import { green } from '@material-ui/core/colors';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100vh',
  },

  head:{
    position:'absolute',
    left:600,
    top:80
  },

  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    minHeight: '50vh',
    maxHeight:'50vh',
    overflow: "auto",
  },

  select: {
    marginTop: 100,
    marginLeft: 400,
    padding: 12,
    border: '1px solid #ccc',
    display: 'block',
    borderRadius: 4,
    resize: 'vertical',
    width: '35.5%',
  },
  form:{
    marginTop:150,
    marginLeft:50,
  },
  adminButton:{
    position: "absolute",
    left: 1300,
    top:10
  },
  createButton: {
    color: theme.palette.getContrastText(green[500]) && "white",
    width: 300,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    marginTop: 50,
  },
  card:{
    minWidth:500
  },

}));
