import { homePageState } from './models';
import { feedsLoadedAction, onUserSearchDoneAction } from './actions';

const initialState = homePageState();

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case feedsLoadedAction().type:
      return { ...state, feeds: { ...action.payload } };
    case onUserSearchDoneAction().type:
      return { ...state, searchedUsers: { ...action.payload } };
    default:
      return state;
  }
}
