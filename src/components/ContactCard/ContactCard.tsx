import React, { useEffect, useState } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelector';
import s from './ContactCard.module.css';

function ContactCard(): JSX.Element {
  const { contactID, contacts } = useTypedSelector((state) => state.contacts);
  const [currentContact, setCurrentContact] = useState(contacts[0]);
  useEffect(() => {
    setCurrentContact(contacts[contactID]);
  }, [contactID, contacts]);

  if (currentContact) {
    return (
      <div className={s.card}>
        <div className={s.label}>Name:</div>
        <div className={s.item}>{currentContact.name}</div>
        <div className={s.label}>Email:</div>
        <div className={s.item}>{currentContact.email}</div>
        <div className={s.label}>Phone Number:</div>
        <div className={s.item}>{currentContact.phoneNumber}</div>
        <div className={s.label}>City:</div>
        <div className={s.item}>{currentContact.city}</div>
        <div className={s.editButton} />

      </div>
    );
  } return <div />;
}

export default ContactCard;
