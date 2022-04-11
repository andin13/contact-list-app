/* eslint-disable default-param-last */
import { ContactActionTypes, ContactsAction, ContactsState } from './types';

const initialState: ContactsState = {
  contacts: [],
  contactID: 0,
};

export const contactsReducer = (state = initialState, action: ContactsAction): ContactsState => {
  switch (action.type) {
    case ContactActionTypes.SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case ContactActionTypes.SET_CONTACT_ID:
      return {
        ...state,
        contactID: action.payload,
      };
    default:
      return state;
  }
};
