import { Dispatch } from 'redux';
import { IAddingContact } from 'redux/commonTypes/IAddingContact';
import axios from 'axios';
import { ContactsAction } from '../contacts/types';
import { AppAction, AppActionTypes } from '../app/types';
import { initialize, logout, setFetching } from '../app/actionCreators';
import { authAPI, contactsAPI } from '../../api/api';
import { setContacts } from '../contacts/actionCreators';

export enum ThunkTypes {
  REGISTER = 'REGISTER',
  LOGIN = 'LOGIN',
  GET_CONTACTS = 'GET_CONTACTS',
  ADD_CONTACT_THUNK = 'ADD_CONTACT_THUNK',
  EDIT_CONTACT_THUNK = 'EDIT_CONTACT_THUNK',
  DELETE_CONTACT_THUNK = 'DELETE_CONTACT_THUNK',
}

interface IPayload {
  email?: string;
  password?: string;
  token?: string;
  contact?: IAddingContact;
  editedContact?: IAddingContact;
  id?: number;

}

export const thunkCreator = (
  action: string,
  payload: IPayload,
) => async (
  dispatch: Dispatch<ContactsAction | AppAction>,
) => {
  try {
    dispatch(setFetching(true));
    switch (action) {
      case ThunkTypes.REGISTER: {
        if (payload.email && payload.password) {
          const token: string = await authAPI.register(payload.email, payload.password);
          dispatch(initialize(token));
          localStorage.setItem('AuthToken', token);
        }
        break;
      }
      case ThunkTypes.LOGIN: {
        if (payload.email && payload.password) {
          const token: string = await authAPI.login(payload.email, payload.password);
          dispatch(initialize(token));
          localStorage.setItem('AuthToken', token);
        }
        break;
      }
      case ThunkTypes.GET_CONTACTS: {
        if (payload.token) {
          dispatch(setContacts(await contactsAPI.getContacts(payload.token)));
        }
        break;
      }
      case ThunkTypes.ADD_CONTACT_THUNK: {
        if (payload.token && payload.contact) {
          await contactsAPI.addContact(payload.token, payload.contact);
          dispatch(setContacts(await contactsAPI.getContacts(payload.token)));
        }
        break;
      }
      case ThunkTypes.EDIT_CONTACT_THUNK: {
        if (payload.token && payload.editedContact && payload.id) {
          await contactsAPI.editContact(payload.token, payload.editedContact, payload.id);
          dispatch(setContacts(await contactsAPI.getContacts(payload.token)));
        }
        break;
      }
      case ThunkTypes.DELETE_CONTACT_THUNK: {
        if (payload.token && payload.id) {
          await contactsAPI.deleteContact(payload.token, payload.id);
          dispatch(setContacts(await contactsAPI.getContacts(payload.token)));
        }
        break;
      }
      default: return;
    }
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response?.status === 401) {
        localStorage.removeItem('AuthToken');
        dispatch(logout());
        dispatch({
          type: AppActionTypes.SET_ERROR,
          payload: 'Auth error has happened',
        });
      } else {
        dispatch({
          type: AppActionTypes.SET_ERROR,
          payload: 'Error has happened',
        });
      }
    }
  } finally {
    dispatch(setFetching(false));
  }
};
