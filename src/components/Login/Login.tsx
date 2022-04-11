import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../Forms/LoginRegisterForms/LoginForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Preloader from '../UI/Preloader/Preloader';

function Login(): JSX.Element {
  const { isAuth, isFetching } = useTypedSelector((state) => state.app);

  if (isAuth) {
    return <Navigate to="/contacts" />;
  } return (
    <div>
      {isFetching ? <Preloader /> : null}
      <LoginForm />
    </div>
  );
}

export default Login;
