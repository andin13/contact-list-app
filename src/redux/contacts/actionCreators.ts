import { ContactActionTypes, ContactsAction } from './types';
import { IContact } from '../commonTypes/IContact';

export const setContacts = (
  payload: IContact[],
):ContactsAction => ({ type: ContactActionTypes.SET_CONTACTS, payload });
export const setContactID = (
  payload: number,
):ContactsAction => ({ type: ContactActionTypes.SET_CONTACT_ID, payload });
