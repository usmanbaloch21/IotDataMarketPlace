import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import _ from 'lodash';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CollectionForm } from '../../components/CollectionForm';
import { DataTypeForm } from '../../components/DataTypeFrom';
import { useStateValue } from '../../context/AppContext';
import firebase from '../../firebase.js';
import useStyles from './styles';
import { useFirebaseCollection } from '../../hooks/useFirebaseCollection';

const Settings = () => {
  const classes = useStyles();
  useFirebaseCollection();
  const [select, setSelect] = useState('');
  const [{ trolley }] = useStateValue();

  const handleCollectionFormSubmit = async (values, { resetForm }) => {
    const collectionRef = firebase
      .database()
      .ref(`collection/${values.collectionName}`);
    await collectionRef.set({ img: values.imgUrl });
    resetForm();
  };
  const handleDataTypeForm = async (values, { resetForm }) => {
    const dataTypeRef = firebase
      .database()
      .ref(`collection/${select}/dataType/${values.dataTypeName}`);
    await dataTypeRef.set({ value: values.value, sign: values.sign });
    resetForm();
  };

  return (
    <>
      <Link to="/">
        <Button
          className={classes.adminButton} color="primary" size="large"
          variant="outlined"
        >Home</Button>
      </Link>
      <h2 className={classes.head}>Set data Types</h2>
      < div className={classes.form}>
        <select
          className={classes.select} onChange={(e) => setSelect(e.target.value)}
        >
          <option value="">Select DataType</option>
          {Object.keys(trolley.collection).map((item, index) => (
            <option value={item} key={index}>
              {_.startCase(item)}
            </option>
          ))}
        </select>
        {!select ? (
          <CollectionForm handleFormSubmit={handleCollectionFormSubmit} />
        ) : (
          <DataTypeForm handleFormSubmit={handleDataTypeForm} />
        )}
      </div>
    </>
  );
};

export default Settings;
