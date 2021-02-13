import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) => ({
  root: {
    minWidth: 275,
    minHeight: "80vh",
    overflow: "auto",
    maxHeight: "80vh",
    border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  containerRight: {
    position: "fixed",
    top: 100,
    right: 20,
    zIndex: 9999,
  },
  containerLeft: {
    position: "fixed",
    top: 100,
    left: 20,
    zIndex: 9999,
  },
  placeholder: {
    height: 0,
    zIndex: -1,
  },
}));
