import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: 330,
    minHeight: 520,
  },
  media: {
    height: 250,
    width: 400,
    objectFit: "contain",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  },
}));
