import React from 'react';
import { Button } from 'antd';
import ContactEditForm from 'components/Forms/ContactAddEditForms/ContactEditForm';
import { useActions } from '../../hooks/useActions';
import s from './ContactItem.module.css';
import { ContactItemProps } from './types';
import { useTypedSelector } from '../../hooks/useTypedSelector';

function ContactItem({ contact, index }: ContactItemProps): JSX.Element {
  const { deleteContactThunk, setContactID } = useActions();
  const { token } = useTypedSelector((state) => state.app);
  const { contactID } = useTypedSelector((state) => state.contacts);
  const containerOnClickHandler = () => setContactID(index);

  return (
    <div
      className={contactID === index ? s.selectedContainer : s.container}
      onKeyDown={containerOnClickHandler}
      onClick={containerOnClickHandler}
      role="button"
      tabIndex={0}
    >
      <div className={s.content}>
        <div className={s.name}>{contact.name}</div>
        <div className={s.email}>{contact.email}</div>
      </div>
      <div className={s.buttons}>
        <ContactEditForm contact={contact} />
        <Button
          className={s.deleteButton}
          onClick={() => {
            deleteContactThunk(contact.id, token);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ContactItem;
