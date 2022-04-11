import React from 'react';
import { ErrorMessage, Field } from 'formik';
import s from './CustomFieldCreator.module.css';

interface CustomFieldCreatorProps {
    name: string;
    placeholder: string;
    type: string;
}

function CustomFieldCreator({ name, placeholder, type }:CustomFieldCreatorProps): JSX.Element {
  return (
    <div>
      <Field className={s.field} id={name} name={name} placeholder={placeholder} type={type} />
      <ErrorMessage className={s.error} name={name} component="div" />
    </div>
  );
}

export default CustomFieldCreator;
