/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import loggedInReducer from './containers/publicPages/login/redux/reducer';
import editProfileReducer from './containers/Profile/redux/reducer';
import homePageReducer from './containers/HomePage/redux/reducer';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    Auth: loggedInReducer,
    Profile: editProfileReducer,
    homePage: homePageReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
