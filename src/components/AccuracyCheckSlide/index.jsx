import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { SELECT_ACCURACY } from "../../constants/types";
import { useStateValue } from "../../context/AppContext";
import useStyles from "./styles";

function valueLabelFormat(value) {
  return `${value}`;
}
const ProximityCheckSlide = () => {
  const [check, setCheck] = useState({
    minAccuracy: false,
  });
  const classes = useStyles();
  const [{ trolley }, dispatch] = useStateValue();
  const { minAccuracy } = check;
  const [value, setValue] = useState(null);

  const slideHandleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    dispatch({
      type: SELECT_ACCURACY,
      payload: { check, value },
    });
  }, [check, value]);

  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };
  const marks = [
    {
      value: 0.25,
      label: "25%",
    },
    {
      value: 0.5,
      label: "50%",
    },
    {
      value: 0.75,
      label: "75%",
    },
    {
      value: 1,
      label: "100%",
    },
  ];

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Accuracy Requirements</Typography>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={minAccuracy}
              onChange={handleChange}
              name="minAccuracy"
              color="primary"
            />
          }
          label="Should have minimum accuracy"
        />
      </div>
      <div className={classes.slider}>
        <Slider
          value={value}
          min={0.1}
          step={0.05}
          max={1}
          scale={(x) => x * 1}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={slideHandleChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
          marks={marks}
          disabled={check.minAccuracy === true ? false : true}
        />
      </div>
    </div>
  );
};

export default ProximityCheckSlide;
