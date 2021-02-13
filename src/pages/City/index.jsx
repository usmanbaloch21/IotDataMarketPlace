import Grid from '@material-ui/core/Grid';
import React, { useMemo } from 'react';
import CheckboxListWithSearch from '../../components/CheckboxListWithSearch';
import DataContainer from '../../components/DataContainer';
import GoogleM from '../../components/GoogleM/';
import Trolley from '../../components/Trolley';
import { CITY_LIST } from '../../constants/cityList';
import { SELECT_POSTCODE } from '../../constants/types';
import { useStateValue } from '../../context/AppContext';

export const City = () => {
  const [{ trolley: { cityNames, postCodes } }, dispatch] = useStateValue();
  const mockData = useMemo(
    () => {
      const selectedCities = [];
      cityNames.forEach(cityName => selectedCities.push(...CITY_LIST[cityName]));
      return selectedCities;
    },
    [],
  );

  const handlePostCodeClick = (event, item) => {
    const { Postcode, Latitude, Longitude } = item;
    dispatch({
      type: SELECT_POSTCODE,
      payload: { Postcode, Latitude, Longitude },
    });
  };

  return (
    <div>
      <GoogleM postCodes={postCodes} />
      <Grid item>
        <DataContainer>
          <Trolley
            buttonText="Checkout PostCodes"
            nextPage="/datatypes"
            isDisabled={!postCodes.length}
          />
        </DataContainer>
      </Grid>
      <Grid item>
        <DataContainer position="left">
          <CheckboxListWithSearch
            data={mockData}
            title="Search By PostCode"
            searchBy="Postcode"
            handlePostCodeClick={handlePostCodeClick}
          />
        </DataContainer>
      </Grid>
    </div>
  );
};
