import { createSelector } from 'reselect';

const connectionKey = 'Auth';

const selectLoginDomain = state => state[connectionKey];

export const makeSelectToken = () =>
  createSelector(
    selectLoginDomain,
    globalState =>  globalState.user ? globalState.user.token : null 
  );