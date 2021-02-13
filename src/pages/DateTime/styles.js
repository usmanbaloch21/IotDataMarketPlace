import makeStyles from "@material-ui/core/styles/makeStyles";
import { green } from '@material-ui/core/colors';
export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  line: {
    width: "80vw",
    marginTop: "2rem",
  },
  button: {
    color: theme.palette.getContrastText(green[500]) && "white",
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    position: "absolute",
    left: 1100,
    top: 600,
  },
  head:{
    marginLeft:600,
  },
  head1:{
    position:'absolute',
    left:600
  }
}));
