import { fade } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const hundred = "100%";
export default makeStyles((theme) => ({
  title: {
    fontSize: 14,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    padding: 5,
    color: "black",
  },
  parent: {
    display: "flex",
    flexDirection: "column",
  },
}));
