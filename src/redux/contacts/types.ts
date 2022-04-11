import { IContact } from '../commonTypes/IContact';

export interface ContactsState {
    contacts: IContact[];
    contactID: number;
}

export enum ContactActionTypes {
    SET_CONTACTS = 'SET_CONTACTS',
    SET_CONTACT_ID = 'SET_CONTACT_ID',
}

export interface SetContactsAction {
    type: ContactActionTypes.SET_CONTACTS;
    payload: IContact[];
}

export interface SetContactIDAction {
    type: ContactActionTypes.SET_CONTACT_ID;
    payload: number;
}

export type ContactsAction = SetContactsAction | SetContactIDAction;
