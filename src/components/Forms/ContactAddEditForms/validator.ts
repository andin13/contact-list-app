import { FormikErrors } from 'formik';
import { FormValuesInterface } from './FormValuesInterface';
import { IAddingContact } from '../../../redux/commonTypes/IAddingContact';

export const validator = (values: IAddingContact) => {
  const errors: FormikErrors<FormValuesInterface> = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.city) {
    errors.city = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.city) {
    errors.city = 'Required';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if (
    !/^(\d+-?)+\d+$/.test(values.phoneNumber)
  ) {
    errors.phoneNumber = 'Invalid phone number';
  }
  return errors;
};
