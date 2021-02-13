import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useMemo, useState } from 'react';
import { useStateValue } from '../../context/AppContext';
import { useFirebaseCollection } from '../../hooks/useFirebaseCollection';
import Rule from './Rule';
import useStyles from './styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AddSemanticRule = () => {
  const classes = useStyles();
  useFirebaseCollection();
  const [{ trolley }] = useStateValue();
  const options = useMemo(() => Object.values(trolley.collection).map(item => Object.keys(item.dataType)).flat(), [trolley]);
  const [outputArr, setOutputArr] = useState([null]);

  return (
    <>
      <Typography variant="h6">
        Add Semantic rules
      </Typography>
      <div className={classes.form}>
        {outputArr.map((item, index) => <Rule key={index} options={options} index={index} />)}
        <IconButton color="secondary" onClick={() => setOutputArr([...outputArr, null])}>
          <AddCircleIcon className={classes.addButton} />
        </IconButton>
      </div>
    </>
  );
};

export default AddSemanticRule;
