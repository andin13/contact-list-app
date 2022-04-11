import { AppAction, AppActionTypes } from './types';

export const setFetching = (
  payload: boolean,
):AppAction => ({ type: AppActionTypes.SET_FETCHING, payload });
export const setError = (
  payload: string,
):AppAction => ({ type: AppActionTypes.SET_ERROR, payload });
export const initialize = (
  payload: string,
):AppAction => ({ type: AppActionTypes.INITIALIZE, payload });
export const logout = ():AppAction => ({ type: AppActionTypes.LOGOUT });
