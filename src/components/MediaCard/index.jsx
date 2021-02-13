import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const MediaCard = ({ cityName, image, handleCardClick,isDisabled }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cityName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleCardClick(cityName)}
          disabled={isDisabled}
        >
          Select Area
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
