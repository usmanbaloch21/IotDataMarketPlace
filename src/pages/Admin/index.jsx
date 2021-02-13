import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddSemanticRule from '../../components/AddSemanticRule';
import ConfirmDialog from '../../components/ConfirmDialog';
import SemanticRules from '../../components/SemanticRules';
import { DELETE_RULE } from '../../constants/types';
import { useStateValue } from '../../context/AppContext';
import firebase from '../../firebase';
import { useFirebaseRule } from '../../hooks/useFirebaseRule';
import useStyles from './styles';
import _ from 'lodash';

const Admin = () => {
  const classes = useStyles();
  const [isAddRuleVisible, setIsAddRuleVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [{ rawRules }, dispatch] = useStateValue();
  const handleSubmit = async (name) => {
    try {
      const ruleRef = firebase.database().ref(`rule/${_.camelCase(name)}`);
      const data = {};
      rawRules.forEach(({ dataType, value, sign, relation }) => {
        data[dataType] = { value, sign, relation };
      });
      await ruleRef.set(data);
    } catch {}
  };

  const handleEdit = async (name) => {
    try {

      setIsAddRuleVisible(true);
    } catch {}
  }

  const handleDelete = async (name) => {
    try {
      const ruleRef = firebase.database().ref(`rule/${name}`);
      await ruleRef.remove();
      dispatch({
        type: DELETE_RULE,
        payload: { name },
      });
    } catch {}
  };


  useFirebaseRule();

  return (
    <>
      <Link to="/">
        <Button
          className={classes.adminButton}
          color="primary"
          size="large"
          variant="outlined"
        >
          Home
        </Button>
      </Link>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.wrapper}>
        <Paper elevation={3} className={classes.paper}>
          {isAddRuleVisible ? <AddSemanticRule /> : (
            <SemanticRules
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
        </Paper>
        <Button
          className={classes.createButton}
          size="large"
          onClick={isAddRuleVisible ? () => setIsModalOpen(true) : () => setIsAddRuleVisible(true)}
        >
          {isAddRuleVisible ? 'Save' : 'Create'}
        </Button>
      </Grid>
      <ConfirmDialog
        isOpen={isModalOpen}
        handleClose={() => {
          setIsModalOpen(false);
          setIsAddRuleVisible(false);
        }}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Admin;
