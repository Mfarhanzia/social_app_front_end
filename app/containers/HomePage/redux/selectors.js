import { createSelector } from 'reselect';

const connectionKey = 'HomePage';

const selectLoginDomain = state => state[connectionKey];

export const makeSelectFeeds = () =>
  createSelector(
    selectLoginDomain,
    globalState =>  globalState.feeds
  );