import { IAddingContact } from '../commonTypes/IAddingContact';
import { thunkCreator, ThunkTypes } from './thunkCreator';

export const register = (
  email: string,
  password: string,
) => thunkCreator(ThunkTypes.REGISTER, { email, password });

export const login = (
  email: string,
  password: string,
) => thunkCreator(ThunkTypes.LOGIN, { email, password });

export const getContacts = (
  token: string,
) => thunkCreator(ThunkTypes.GET_CONTACTS, { token });

export const addContactThunk = (
  contact: IAddingContact,
  token: string,
) => thunkCreator(ThunkTypes.ADD_CONTACT_THUNK, { contact, token });

export const editContactThunk = (
  id: number,
  editedContact: IAddingContact,
  token: string,
) => thunkCreator(ThunkTypes.EDIT_CONTACT_THUNK, { id, editedContact, token });

export const deleteContactThunk = (
  id: number,
  token: string,
) => thunkCreator(ThunkTypes.DELETE_CONTACT_THUNK, { id, token });
