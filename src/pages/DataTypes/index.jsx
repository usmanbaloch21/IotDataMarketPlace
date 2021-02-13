import Grid from '@material-ui/core/Grid';
import React from 'react';
import _ from 'lodash';
import DataContainer from '../../components/DataContainer';
import DataTypesCard from '../../components/DataTypesCard';
import Trolley from '../../components/Trolley/index';
import { SELECT_DATA_TYPE } from '../../constants/types';
import { useStateValue } from '../../context/AppContext';
import useStyles from './styles';

function DataTypes() {
  const classes = useStyles();
  const [{ trolley: { collection, dataType } }, dispatch] = useStateValue();

  const handleDataTypeClick = (event, item) => {
    dispatch({
      type: SELECT_DATA_TYPE,
      payload: item,
    });
  };

  return (
    <Grid container direction="column">
      <Grid item container justify="center">
        <h2>Select Data Types</h2>
      </Grid>
      <Grid
        item
        justify="space-between"
        container
        className={classes.container}
      >
        <Grid spacing={3} container item>
          {Object.entries(collection).map(([key, value], index) => (
            <Grid item key={index}>
              <DataTypesCard
                image={value.img}
                collectionName={_.startCase(key)}
                data={value.dataType}
                handleDataTypeClick={handleDataTypeClick}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item>
          <DataContainer>
            <Trolley
              buttonText="Checkout DataTypes"
              nextPage="/datetime"
              isDisabled={_.isEmpty(dataType)}
            />
          </DataContainer>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DataTypes;
