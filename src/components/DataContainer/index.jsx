import Card from "@material-ui/core/Card";
import React, { Fragment } from "react";
import useStyles from "./styles";

const DataContainer = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div
        className={
          props.position === "left"
            ? classes.containerLeft    : classes.containerRight
        }
      >
        <Card className={classes.root}>{props.children}</Card>
      </div>
      <div className={classes.placeholder}> </div>
    </Fragment>
  );
};
export default DataContainer;
