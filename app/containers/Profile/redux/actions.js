import { createAction } from 'redux-actions';

export const getUserInfoAction = createAction('GET_USER_INFO_ACTION');
export const setUserInfoAction = createAction('SET_USER_INFO_ACTION');
export const updateUserInfoAction = createAction('UPDATE_USER_INFO_ACTION');
// export const userInfoUpdatedAction = createAction('USER_INFO_UPDATED_ACTION');

// ChangePassword related actions
export const updatePasswordAction = createAction('UPDATE_PASSWORD_ACTION');
// export const passwordUpdatedAction = createAction('PASSWORD_UPDATED_ACTION');
