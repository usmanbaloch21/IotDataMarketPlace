import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { SELECT_DAYS } from "../../constants/types";
import { useStateValue } from "../../context/AppContext";
import useStyles from "./styles";

function DaysCheckBox() {
  const [{ trolley }, dispatch] = useStateValue();
  const classes = useStyles();
  const [state, setState] = React.useState({
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
  });
  const { mon, tue, wed, thu, fri, sat, sun } = state;
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    dispatch({
      type: SELECT_DAYS,
      payload: { mon, tue, wed, thu, fri, sat, sun },
    });
  }, [state]);

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>By Days</Typography>
      <div className={classes.checkbox}>
        <FormControlLabel
          className={classes.checkbox1}
          control={
            <Checkbox
              checked={mon}
              onChange={handleChange}
              name="mon"
              color="primary"
            />
          }
          label="MON"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={tue}
              onChange={handleChange}
              name="tue"
              color="primary"
            />
          }
          label="TUE"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={wed}
              onChange={handleChange}
              name="wed"
              color="primary"
            />
          }
          label="WED"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={thu}
              onChange={handleChange}
              name="thu"
              color="primary"
            />
          }
          label="THU"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={fri}
              onChange={handleChange}
              name="fri"
              color="primary"
            />
          }
          label="FRI"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={sat}
              onChange={handleChange}
              name="sat"
              color="primary"
            />
          }
          label="SAT"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={sun}
              onChange={handleChange}
              name="sun"
              color="primary"
            />
          }
          label="SUN"
        />
      </div>
    </div>
  );
}

export default DaysCheckBox;
