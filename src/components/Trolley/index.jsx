import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React, { Fragment, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { SIGNS } from '../../constants/signs';
import { useStateValue } from '../../context/AppContext';
import useStyles from './styles';
import _ from 'lodash';

const Trolley = ({
  buttonText,
  isDisabled,
  nextPage,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const goto = (nextPage) => history.push(nextPage);
  const [{ trolley: { cityNames, postCodes, dataType } }] = useStateValue();

  const renderDataTypes = useMemo(() => {
    const result = [];
    _.forOwn(dataType, (value, key) => {
      const collection = result.find(item => item.collectionName === value.collectionName);
      if (!collection) {
        result.push({
          collectionName: value.collectionName,
          dataTypes: [{
            name: key,
            sign: value.sign,
            value: value.value,
          }],
        });
      } else {
        collection.dataTypes = [
          ...collection.dataTypes,
          {
            name: key,
            sign: value.sign,
            value: value.value,
          },
        ];
      }
    });

    return result.map((item, index) => (
        <Fragment key={index}>
          <p
            className={classes.posthead}
          >
            {_.startCase(item.collectionName)}
          </p>
          {item.dataTypes?.map((dataType, i) => (
            <div key={i} className={classes.pcItem}>
              {`${_.startCase(dataType.name)}`}
            </div>
          ))}
        </Fragment>
      ),
    );
  }, [dataType]);

  return (
    <Fragment>
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          My Trolley
        </Typography>
        {!!cityNames.length && (
          <p className={classes.posthead}>Selected Locations</p>
        )}
        {cityNames.map((cityName, index) => (
          <div key={index} className={classes.pcItem}>
            {cityName}
          </div>
        ))}
        {!!postCodes.length && (
          <p className={classes.posthead}>Selected PostCodes</p>
        )}
        {postCodes.map((postCodeItem, index) => (
          <div key={index} className={classes.pcItem}>
            {postCodeItem.Postcode}
          </div>
        ))}
        {renderDataTypes}
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          variant="contained"
          color="secondary"
          disabled={isDisabled}
          onClick={() => goto(nextPage)}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Fragment>
  );
};
export default Trolley;
