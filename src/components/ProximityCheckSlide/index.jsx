import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { SELECT_PROXIMITY } from "../../constants/types";
import { useStateValue } from "../../context/AppContext";
import useStyles from "./styles";

function valueLabelFormat(value) {
  return `${value}`;
}
const ProximityCheckSlide = () => {
  const [check, setCheck] = useState({
    sameSensor: false,
    hasRadius: false,
  });
  const classes = useStyles();
  const [{ trolley }, dispatch] = useStateValue();
  const { sameSensor, hasRadius } = check;
  const [value, setValue] = useState(100);

  const slideHandleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    dispatch({
      type: SELECT_PROXIMITY,
      payload: { check, value },
    });
  }, [check, value]);

  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };
  const marks = [
    {
      value: 100,
      label: "100M",
    },
    {
      value: 1000,
      label: "1KM",
    },
    {
      value: 2000,
      label: "2KM",
    },
    {
      value: 3000,
      label: "3KM",
    },
    {
      value: 4000,
      label: "4KM",
    },
    {
      value: 5000,
      label: "5KM",
    },
  ];

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Proximity Requirements</Typography>
      <div>
        <div className={classes.sensor}>
          <FormControlLabel
            control={
              <Checkbox
                checked={sameSensor}
                onChange={handleChange}
                name="sameSensor"
                color="primary"
              />
            }
            label="Should be Connected to the same sensing platform"
          />
        </div>
        <div className={classes.radius}>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={hasRadius}
                  onChange={handleChange}
                  name="hasRadius"
                  color="primary"
                />
              }
              label="Should be deployed within"
            />
          </div>
          <div className={classes.slider}>
            <Slider
              value={value}
              min={100}
              step={100}
              max={5000}
              scale={(x) => x * 1}
              getAriaValueText={valueLabelFormat}
              valueLabelFormat={valueLabelFormat}
              onChange={slideHandleChange}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
              marks={marks}
              disabled={check.hasRadius === true ? false : true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProximityCheckSlide;
