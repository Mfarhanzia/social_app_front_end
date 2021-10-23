import { userInfo } from './models';
import {
  followersLoadedAction,
  followedByLoadedAction,
  unFollowDoneAction,
} from './actions';

const initialState = userInfo();

export default function userInfoReducer(state = initialState, action) {
  switch (action.type) {
    case followersLoadedAction().type:
      return { ...state, followers: { ...action.payload } };
    case followedByLoadedAction().type:
      return { ...state, followed_by: { ...action.payload } };

    default:
      return state;
  }
}
