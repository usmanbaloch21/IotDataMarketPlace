import { fade } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const hundred = "100%";
export default makeStyles((theme) => ({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    padding: 5,
    color: "black",
  },
  cover: {
    width: 151,
  },
  pos: {
    marginBottom: 12,
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  },
  cardContent: {
    padding: 0,
  },
  cityName: {
    display: "flex",
    justifyContent: "center",
  },
  posthead: {
    fontWeight: "bold",
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    fontSize: "100%",
    marginBottom: 0.5,
  },
  postcode: {},
  pcItem: {
    listStyle: "none",
    paddingLeft: 60,
    borderLeft: "6px solid red",
    backgroundColor: "lightgrey",
  },
  img: {
    maxHeight: 130,
    width: "100%",
    objectFit: "contain",
    marginBottom: 15,
    marginTop: 5,
    borderRadius: 30,
  },
}));
