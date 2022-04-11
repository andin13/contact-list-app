import * as ThunkCreators from './thunks/thunks';
import * as ContactsActionCreators from './contacts/actionCreators';
import * as AppActionCreators from './app/actionCreators';

export default {
  ...ThunkCreators,
  ...ContactsActionCreators,
  ...AppActionCreators,
};
