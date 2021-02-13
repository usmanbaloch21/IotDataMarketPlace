// @flow
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import './styles.css';
import { SIGNS } from '../../constants/signs';

export const DataTypeForm = ({ handleFormSubmit }) => {
  const initialValues = { dataTypeName: ''};

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
      {({ isSubmitting }) => (

        <Form className="form">
          <label className="input__label" htmlFor={'dataTypeName'}>
            Enter dataType Param
          </label>
          <Field className="input__box1" name="dataTypeName" />
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
