import { createAction } from 'redux-actions';

export const getFeedsAction = createAction('GET_FEEDS_ACTION');
export const feedsLoadedAction = createAction('FEEDS_LAODED_ACTION');

export const onUserSearchAction = createAction('ON_USER_SEARCH_ACTION');
export const onUserSearchDoneAction = createAction(
  'ON_USER_SEARCH_Done_ACTION',
);
