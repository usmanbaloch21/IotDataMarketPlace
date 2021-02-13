import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { SELECT_YEAR } from "../../constants/types";
import { useStateValue } from "../../context/AppContext";
import useStyles from "./styles";

function valuetext(value) {
  return `${value} Years`;
}

const RangeSlider = (props) => {
  const classes = useStyles();
  const [{ trolley }, dispatch] = useStateValue();
  const [value, setValue] = useState([2010, 2020]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch({
      type: SELECT_YEAR,
      payload: { value },
    });
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" className={classes.title} gutterBottom>
        Duration of Interest
      </Typography>
      <Slider
        className={classes.slider}
        min={2010}
        step={1}
        max={2020}
        scale={(x) => x * 1}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
};

export default RangeSlider;
