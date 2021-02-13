import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../../assests/mockData/mock';
import DataContainer from '../../components/DataContainer';
import MediaCard from '../../components/MediaCard/index';
import SearchBar from '../../components/SearchBar';
import Trolley from '../../components/Trolley';
import { SELECT_CITY } from '../../constants/types';
import { useStateValue } from '../../context/AppContext';
import { useFirebaseCollection } from '../../hooks/useFirebaseCollection';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [{ trolley: { cityNames } }, dispatch] = useStateValue();

  const handleCardClick = cityName => {
    dispatch({ type: SELECT_CITY, payload: { cityName } });
  };

  const prepareDataArray = (array = [], search) => {
    return search
      ? array.filter(data =>
        data.cityName?.toLowerCase()?.includes(search.toLowerCase()),
      )
      : array;
  };
  useFirebaseCollection();
  return (
    <div>
      <Link to="/admin">
        <Button className={classes.adminButton} color="primary" size="large" variant="outlined" >Admin</Button>
      </Link>
      <Grid container direction="column">
        <Grid
          item
          container
          justify="center"
          className={classes.searchContainer}
        >
          <SearchBar search={search} setSearch={setSearch} />
        </Grid>
        <Grid
          item
          justify="space-between"
          container
          className={classes.container}
        >
          <Grid spacing={3} container item>
            {prepareDataArray(mockData, search).map((data) => (
              <Grid key={data.id} item>
                <MediaCard
                  image={data.img}
                  cityName={data.cityName}
                  handleCardClick={handleCardClick}
                  isDisabled={cityNames.includes(data.cityName)}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <DataContainer>
              <Trolley
                buttonText="Select Location"
                nextPage="/city"
                isDisabled={!cityNames.length}
              />
            </DataContainer>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
