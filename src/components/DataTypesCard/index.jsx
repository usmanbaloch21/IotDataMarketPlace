import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React from 'react';
import useStyles from './styles';
import _ from 'lodash';

const DataTypesCard = ({ image, collectionName, data, handleDataTypeClick }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {collectionName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <FormGroup>
          {Object.entries(data).map(([key, value], index) => (
            <FormControlLabel
              key={index}
              control={(
                <Checkbox
                  onChange={e => handleDataTypeClick(e, {
                    name: key,
                    data: { ...value, collectionName },
                  })}
                  name={key}
                  color="primary"
                />
              )}
              label={_.startCase(key)}
            />
          ))}
        </FormGroup>
      </CardActions>
    </Card>
  );
};

export default DataTypesCard;
