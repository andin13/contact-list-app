import React from 'react';
import { ContactsFilterProps } from './types';
import s from './ContactsFilter.module.css';

function ContactsFilter({ filter, setFilter }: ContactsFilterProps): JSX.Element {
  const changeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, query: e.target.value });
  };

  return (
    <input
      className={s.field}
      placeholder="Search..."
      value={filter.query}
      onChange={(e) => changeSearchInput(e)}
    />
  );
}

export default ContactsFilter;
