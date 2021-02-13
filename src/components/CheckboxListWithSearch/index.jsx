import CardActions from '@material-ui/core/CardActions';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import useStyles from './styles.js';

const CheckboxListWithSearch = ({ data, title, searchBy, handlePostCodeClick }) => {
  const [searchPost, setSearchPost] = useState('');
  const classes = useStyles();
  const preparedData = (data, search) => {
    if (!search) return [];
    return data.filter((item) => {
      return item[searchBy].includes(search.toUpperCase());
    });
  };

  return (
    <div className={classes.parent}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <CardActions className={classes.cardActions}>
        <SearchBar search={searchPost} setSearch={setSearchPost} />
      </CardActions>
      <div>
        <FormGroup column="true">
          {preparedData(data, searchPost).map((item, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  onChange={(e) => handlePostCodeClick(e, item)}
                  name={item.Postcode}
                  color="primary"
                />
              }
              label={item.Postcode}
            />
          ))}
        </FormGroup>
      </div>
    </div>
  );
};

export default CheckboxListWithSearch;
