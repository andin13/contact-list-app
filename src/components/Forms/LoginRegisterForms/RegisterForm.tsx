import React from 'react';
import {
  Formik,
  FormikErrors,
} from 'formik';
import { Form, SubmitButton } from 'formik-antd';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useActions } from '../../../hooks/useActions';
import { FormValues } from './FormValues';
import { validator } from './validator';
import CustomFieldCreator from '../CustomFieldCreator/CustomFieldCreator';
import s from './RegisterForm.module.css';

function RegisterForm(): JSX.Element {
  const { register } = useActions();
  const initialValues: FormValues = {
    email: '',
    password: '',
    passwordRepeat: '',
  };
  const navigate = useNavigate();

  return (
    <div className={s.form}>
      <h1 className={s.title}>Register</h1>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<FormValues> = validator(values);
          if (values.password !== values.passwordRepeat) {
            errors.passwordRepeat = 'Fields must be equal';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          register(values.email, values.password);
          navigate('/login');
          actions.setSubmitting(false);
        }}
      >
        <Form className={s.formContent}>
          <CustomFieldCreator name="email" placeholder="Enter email" type="text" />
          <CustomFieldCreator name="password" placeholder="Enter password" type="password" />
          <CustomFieldCreator
            name="passwordRepeat"
            placeholder="Enter password again"
            type="password"
          />
          <div className={s.buttons}>
            <SubmitButton>Submit</SubmitButton>
            <Button onClick={() => navigate('/login')}>Login</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterForm;
