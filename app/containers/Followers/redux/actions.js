import { createAction } from 'redux-actions';

export const getFollowersAction = createAction('GET_FOLLOWERS_ACTION');
export const followersLoadedAction = createAction('FOLLOWERS_LAODED_ACTION');

export const getFollowedByAction = createAction('GET_FOLLOWED_BY_ACTION');
export const followedByLoadedAction = createAction('FOLLOWED_BY_LAODED_ACTION');

export const unFollowAction = createAction('UNFOLLOW_ACTION');
export const unFollowDoneAction = createAction('UNFOLLOW_DONE_ACTION');

export const userFollowAction = createAction('USER_FOLLOW_ACTION');
