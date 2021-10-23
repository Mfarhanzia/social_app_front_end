import { put, takeLatest, select, throttle } from 'redux-saga/effects';
import axios from '../../../config/axios';
import { makeSelectToken } from '../../publicPages/login/redux/selectors';
import {
  getFeedsAction,
  feedsLoadedAction,
  onUserSearchAction,
  onUserSearchDoneAction,
} from './actions';

function* getFeedsSaga(action) {
  const {
    payload: { pageNo, setIsLoading },
  } = action;
  try {
    const token = yield select(makeSelectToken());
    const header = {
      Authorization: `jwt ${token}`,
    };
    const response = yield axios.get(`posts/feed?page=${pageNo}`, {
      headers: header,
    });
    if (response.status === 201 || response.status === 200) {
      yield put({
        type: feedsLoadedAction().type,
        payload: response.data,
      });
      setIsLoading(false);
    }
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
}

function* onUserSearchSaga(action) {
  const {
    payload: { pageNo, setIsLoading, query },
  } = action;
  try {
    const token = yield select(makeSelectToken());
    const header = {
      Authorization: `jwt ${token}`,
    };
    const response = yield axios.get(
      `user/search?page=1&searched_query=${query}`,
      { headers: header },
    );
    if (response.status === 201 || response.status === 200) {
      yield put({
        type: onUserSearchDoneAction().type,
        payload: response.data,
      });
      setIsLoading(false);
    }
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
}

export default function* homePageSagas() {
  yield takeLatest(getFeedsAction().type, getFeedsSaga);
  yield throttle(700, onUserSearchAction().type, onUserSearchSaga);
}
