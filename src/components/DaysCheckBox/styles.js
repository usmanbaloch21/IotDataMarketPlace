import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) => ({
  root: {
    width: "70vw",
    margin: "auto",
    display: "flex",
    marginTop: "2vh",
  },
  title: {
    width: "28%",
    paddingRight: 30,
    paddingTop: 10,
  },
  checkbox: {
    display: "flex",
    minWidth: "72%",
    justifyContent: "space-between",
  },
}));
