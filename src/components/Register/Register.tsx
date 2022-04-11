import React from 'react';
import { Navigate } from 'react-router-dom';
import RegisterForm from '../Forms/LoginRegisterForms/RegisterForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Preloader from '../UI/Preloader/Preloader';

function Register(): JSX.Element {
  const { isAuth, isFetching } = useTypedSelector((state) => state.app);
  if (isAuth) {
    return <Navigate to="/contacts" />;
  } return (
    <div>
      {isFetching ? <Preloader /> : null}
      <RegisterForm />
    </div>
  );
}

export default Register;
