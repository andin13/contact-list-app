import axios from 'axios';
import { IContact } from 'redux/commonTypes/IContact';
import { IAddingContact } from '../redux/commonTypes/IAddingContact';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/',
});

export const authAPI = {
  login(email: string, password: string) {
    return instance.post('auth/login', { email, password })
      .then((response) => response.data.access_token);
  },
  register(email: string, password: string) {
    return instance.post('auth/register', { email, password })
      .then((response) => response.data.access_token);
  },
};

export const contactsAPI = {
  getContacts(token: string) {
    return instance.get<IContact[]>('contacts', {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.data);
  },
  addContact(token: string, contact: IAddingContact) {
    const headers = {
      Authorization: token,
      'Content-Type': 'application/json',
    };
    return instance.post('contacts', contact, { headers })
      .then((response) => response.data);
  },
  editContact(token: string, contact: IAddingContact, id: number) {
    const headers = {
      Authorization: token,
      'Content-Type': 'application/json',
    };
    return instance.put(`contacts/${id}`, contact, { headers })
      .then((response) => response.data);
  },
  deleteContact(token: string, id: number) {
    const headers = {
      Authorization: token,
      'Content-Type': 'application/json',
    };
    return instance.delete(`contacts/${id}`, { headers })
      .then((response) => response.data);
  },
};
