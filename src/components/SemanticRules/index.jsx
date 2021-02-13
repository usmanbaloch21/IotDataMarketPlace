import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import GavelIcon from '@material-ui/icons/Gavel';
import React from 'react';
import { useStateValue } from '../../context/AppContext';
import _ from 'lodash';

const SemanticRules = ({ handleDelete }) => {
  const [{ trolley }] = useStateValue();
  return (
    <>
      <Typography variant="h6">
        Semantic rules
      </Typography>
      <div>
        <List>
          {Object.keys(trolley.rule).map(item => (
            <ListItem key={item}>
              <ListItemAvatar>
                <Avatar>
                  <GavelIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={_.startCase(item)} />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => handleDelete(item)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default SemanticRules;
