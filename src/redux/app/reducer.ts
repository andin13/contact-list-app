/* eslint-disable default-param-last */
import { AppAction, AppActionTypes, AppState } from './types';

const initialState: AppState = {
  isAuth: false,
  isFetching: false,
  error: '',
  token: '',
};

export const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionTypes.INITIALIZE:
      return {
        ...state,
        isAuth: true,
        token: `Bearer ${action.payload}`,
      };
    case AppActionTypes.LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: '',
      };
    case AppActionTypes.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case AppActionTypes.SET_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
