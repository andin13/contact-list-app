export interface AppState {
    isAuth: boolean;
    token: string;
    isFetching: boolean;
    error: string;
}

export enum AppActionTypes {
    INITIALIZE = 'INITIALIZE',
    LOGOUT = 'LOGOUT',
    SET_FETCHING = 'SET_FETCHING',
    SET_ERROR = 'SET_ERROR',
}

interface InitializeAction {
    type: AppActionTypes.INITIALIZE;
    payload: string;
}

interface LogoutAction {
    type: AppActionTypes.LOGOUT;
}

interface SetFetchingAction {
    type: AppActionTypes.SET_FETCHING;
    payload: boolean;
}

interface SetErrorAction {
    type: AppActionTypes.SET_ERROR;
    payload: string;
}

export type AppAction = InitializeAction | LogoutAction | SetFetchingAction | SetErrorAction;
