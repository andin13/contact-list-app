import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Modal } from 'antd';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { useActions } from './hooks/useActions';

function App(): JSX.Element {
  const { initialize } = useActions();
  const { setError } = useActions();
  const { error } = useTypedSelector((state) => state.app);
  useEffect(() => {
    const token = localStorage.getItem('AuthToken');
    if (token) {
      initialize(token);
    }
  }, []);

  useEffect(() => {
    if (error) {
      const modal = Modal.error({
        title: 'Error!',
        content: error,
        onOk: () => setError(''),
      });
      return () => {
        modal.destroy();
      };
    } return undefined;
  }, [error, setError]);

  return (
    <div>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>

    </div>
  );
}

export default App;
