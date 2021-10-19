import { createAction } from 'redux-actions';

export const loginAction = createAction('LOGIN_ACTION');
export const loginSuccessAction = createAction('LOGIN_SUCCESS_ACTION');
export const logOutAction = createAction('LOGOUT_ACTION');
export const loggedOutAction = createAction('LOGGEDOUT_ACTION');