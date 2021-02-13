// @flow
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import collectionFormValidationSchema
  from '../../validation/collectionFormValidationSchema';
import './styles.css';

export const CollectionForm = ({ handleFormSubmit }) => {
  const initialValues = { collectionName: '', imgUrl: '' };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={collectionFormValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <label className="input__label" htmlFor={'collectionName'}>
            Datatype you want to create
          </label>
          <Field
            className="input__box1" name="collectionName"
            placeholder="Enter DataType"
          />

          <ErrorMessage
            className="input__error" name="collectionName" component="div"
          />

          <label className="input__label" htmlFor={'imgUrl'}>
            Enter the imgUrl being Used
          </label>
          <Field
            className="input__box2" name="imgUrl" placeholder="Enter valid URL"
          />

          <ErrorMessage
            className="input__error" name="imgUrl" component="div"
          />

          <button
            className="input__submit" type="submit" disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
