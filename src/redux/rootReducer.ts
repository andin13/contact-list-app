import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/reducer';
import { appReducer } from './app/reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  contacts: contactsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
