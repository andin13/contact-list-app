import React from 'react';
import {
  Formik,
} from 'formik';
import { Form, SubmitButton } from 'formik-antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { FormValues } from './FormValues';
import { validator } from './validator';
import CustomFieldCreator from '../CustomFieldCreator/CustomFieldCreator';
import s from './LoginForm.module.css';

function LoginForm(): JSX.Element {
  const { login } = useActions();
  const navigate = useNavigate();
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  return (
    <div className={s.form}>
      <h1 className={s.title}>Login</h1>
      <Formik
        initialValues={initialValues}
        validate={(values) => validator(values)}
        onSubmit={(values, actions) => {
          login(values.email, values.password);
          actions.setSubmitting(false);
        }}
      >
        <Form className={s.formContent}>
          <CustomFieldCreator name="email" placeholder="Enter email" type="text" />
          <CustomFieldCreator name="password" placeholder="Enter password" type="password" />
          <div className={s.buttons}>
            <SubmitButton>Submit</SubmitButton>
            <Button onClick={() => navigate('/register')}>Register</Button>
          </div>

        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
