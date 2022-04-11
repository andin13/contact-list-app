import React, {
  useEffect, useMemo, useState,
} from 'react';
import { Button } from 'antd';
import ContactItem from '../ContactItem/ContactItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import s from './ContactList.module.css';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { IFilter } from '../../redux/commonTypes/IFilter';
import ContactAddForm from '../Forms/ContactAddEditForms/ContactAddForm';
import ContactCard from '../ContactCard/ContactCard';
import { IContact } from '../../redux/commonTypes/IContact';

function ContactList(): JSX.Element {
  const { contacts } = useTypedSelector((state) => state.contacts);
  const { token } = useTypedSelector((state) => state.app);
  const { getContacts, logout } = useActions();
  const [filter, setFilter] = useState<IFilter>({ query: '' });

  const searchedContacts = useMemo(() => contacts.filter(
    (contact: { name: string; }) => contact.name.toLowerCase().includes(filter.query.toLowerCase()),
  ), [filter.query, contacts]);

  const logoutFunc = () => {
    localStorage.removeItem('AuthToken');
    logout();
  };

  useEffect(() => {
    getContacts(token);
  }, []);

  const arrToComponents = searchedContacts.map(
    (item: IContact, index: number) => (
      <ContactItem key={item.id} contact={item} index={index} />
    ),
  );

  return (
    <div className={s.container}>
      <div className={s.header}>
        <ContactsFilter filter={filter} setFilter={setFilter} />
        <ContactAddForm />
        <Button type="default" onClick={() => logoutFunc()}>Logout</Button>
      </div>
      <div className={s.contacts}>
        {arrToComponents}
      </div>
      <div className={s.contactItem}>
        <ContactCard />
      </div>
    </div>
  );
}

export default ContactList;
