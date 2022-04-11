import React from 'react';
import { Navigate } from 'react-router-dom';
import ContactList from '../ContactList/ContactList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Preloader from '../UI/Preloader/Preloader';

function Contacts(): JSX.Element {
  const { isAuth, isFetching } = useTypedSelector((state) => state.app);
  if (!isAuth) {
    return <Navigate to="/login" />;
  } return (
    <div>
      {isFetching ? <Preloader /> : null}
      <ContactList />
    </div>
  );
}

export default Contacts;
