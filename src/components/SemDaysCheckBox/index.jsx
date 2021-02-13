import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { SELECT_DAYS_SEMUSE } from "../../constants/types";
import { useStateValue } from "../../context/AppContext";
import useStyles from "./styles";
import _ from 'lodash';

function SemDaysCheckBox() {
  const [
    { trolley: { rule, dateTime: { semanticDays } } },
    dispatch,
  ] = useStateValue();

  const classes = useStyles();

  const handleChange = rule => {
    dispatch({
      type: SELECT_DAYS_SEMUSE,
      payload: { rule },
    });
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        By Days(Using Semantics)
      </Typography>
      <div className={classes.checkbox}>
        <div className={classes.topcheck}>
          {Object.keys(rule).map(item => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox
                  checked={semanticDays.includes(item)}
                  onChange={() => handleChange(item)}
                  color="primary"
                />
              }
              label={_.startCase(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SemDaysCheckBox;
