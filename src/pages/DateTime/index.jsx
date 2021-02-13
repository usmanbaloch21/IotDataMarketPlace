import Button from '@material-ui/core/Button';
import { saveAs } from 'file-saver';
import React from 'react';
import AccuracyCheckSlide from '../../components/AccuracyCheckSlide';
import DaysCheckBox from '../../components/DaysCheckBox';
import ProximityCheckSlide from '../../components/ProximityCheckSlide';
import RangeSlider from '../../components/RangeSlider';
import SemDaysCheckBox from '../../components/SemDaysCheckBox';
import { useStateValue } from '../../context/AppContext';
import { useFirebaseRule } from '../../hooks/useFirebaseRule';
import useStyles from './styles';

const DateTime = () => {
  const [{ trolley }] = useStateValue();
  const classes = useStyles();

  const handleSubmit = () => {
    const json = JSON.stringify(trolley, null, 2);
    const output = new Blob([json], {
      type: 'application/json',
    });
    saveAs(output, 'data.json');
  };

  useFirebaseRule();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <h2 className={classes.head1}> Date and Time</h2>
        <RangeSlider />
        <DaysCheckBox />
        <hr className={classes.line} />
        <SemDaysCheckBox />
        <hr className={classes.line} />
        <h2 className={classes.head}> Quality of Service</h2>
        <ProximityCheckSlide />
        <AccuracyCheckSlide />
      </div>
      <div className={classes.right}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleSubmit}
        >
          Service Legal Agreement
        </Button>
      </div>
    </div>
  );
};

export default DateTime;
