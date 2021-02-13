import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { SIGNS } from '../../constants/signs';
import { UPDATE_RULES_FOR_SUBMIT } from '../../constants/types';
import { useStateValue } from '../../context/AppContext';
import useStyles from './styles';

const Rule = ({ options, index }) => {
  const classes = useStyles();
  const [relation, setRelation] = useState('and');
  const [dataType, setDataType] = useState('');
  const [value, setValue] = useState('');
  const [sign, setSign] = useState('=');
  const [, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: UPDATE_RULES_FOR_SUBMIT,
      payload: {
        index,
        data: { dataType, value, sign, relation },
      },
    });
  }, [index, value, sign, dataType, relation]);

  return (
    <>
      <div className={classes.items}>
      <select
        className={classes.select1}
        onChange={(e) => setDataType(e.target.value)}
        value={dataType}
      >
        <option value="">Select Data Type</option>
        {options.map((item) => (
          <option value={item} key={item}>
            {_.startCase(item)}
          </option>
        ))}
      </select>
      <label className={classes.label} htmlFor={'sign'}> Select Sign </label>
      <select className={classes.select1} name="sign" value={sign} onChange={e => setSign(e.target.value)}>
        <option value="=">{SIGNS['=']}</option>
        <option value=">">{SIGNS['>']}</option>
        <option value=">=">{SIGNS['>=']}</option>
        <option value=">">{SIGNS['<']}</option>
        <option value="<=">{SIGNS['<=']}</option>
      </select>

      <label className={classes.label} htmlFor={'value'}> Enter Value </label>
      <input className={classes.select1} value={value} onChange={e => setValue(e.target.value)} />
      </div>

      <FormControl className={classes.radio} component="fieldset">
        <label className={classes.label} htmlFor={"radio"}> Relation </label>
        <RadioGroup row value={relation} onChange={(e) => setRelation(e.target.value)}>
          <FormControlLabel value="and" control={<Radio />} label="AND" />
          <FormControlLabel value="or" control={<Radio />} label="OR" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Rule;
