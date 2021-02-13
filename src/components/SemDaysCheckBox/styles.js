import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) => ({
  root: {
    width: "70vw",
    margin: "auto",
    display: "flex",
    marginTop: "2rem",
  },
  title: {
    width: "28%",
    paddingRight: 30,
    paddingTop: 10,
  },
  topcheck: {
    display: "flex",
    justifyContent: "flex-start",
  },
  checkbox: {
    minWidth: "72%",
  },
}));
