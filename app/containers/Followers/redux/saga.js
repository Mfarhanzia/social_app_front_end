import { put, takeLatest, select } from 'redux-saga/effects';
import axios from '../../../config/axios';
import { makeSelectToken } from '../../publicPages/login/redux/selectors';
import {
  getFollowersAction,
  followersLoadedAction,
  getFollowedByAction,
  followedByLoadedAction,
  unFollowAction,
  unFollowDoneAction,
  userFollowAction,
} from './actions';

function* getFollowersSaga(action) {
  const {
    payload: { pageNo, setIsLoading },
  } = action;
  try {
    const token = yield select(makeSelectToken());
    const header = {
      Authorization: `jwt ${token}`,
    };
    const response = yield axios.get(`user/followers?page=${pageNo}`, {
      headers: header,
    });
    if (response.status === 201 || response.status === 200) {
      yield put({
        type: followersLoadedAction().type,
        payload: response.data,
      });
      setIsLoading(false);
    }
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
}

function* getFollowedBySaga(action) {
  const {
    payload: { pageNo, setIsLoading },
  } = action;
  try {
    const token = yield select(makeSelectToken());
    const header = {
      Authorization: `jwt ${token}`,
    };
    const response = yield axios.get(`user/following?page=${pageNo}`, {
      headers: header,
    });
    if (response.status === 201 || response.status === 200) {
      yield put({
        type: followedByLoadedAction().type,
        payload: response.data,
      });
      setIsLoading(false);
    }
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
}

function* unFollowSaga(action) {
  const {
    payload: { id, setFollowLoading },
  } = action;
  try {
    const token = yield select(makeSelectToken());
    const header = {
      Authorization: `jwt ${token}`,
    };
    const response = yield axios.put(
      `user/follower/unfollow/`,
      { unfollow_id: id },
      { headers: header },
    );
    if (response.status === 201 || response.status === 200) {
      setFollowLoading(false);
    }
  } catch (error) {
    console.log(error);
    setFollowLoading(false);
  }
}

function* userFollowSaga(action) {
  const {
    payload: { id, setFollowLoading },
  } = action;
  try {
    const token = yield select(makeSelectToken());
    const header = {
      Authorization: `jwt ${token}`,
    };
    const response = yield axios.post(
      `user/follower/follow/`,
      { follow_id: id },
      { headers: header },
    );
    if (response.status === 201 || response.status === 200) {
      setFollowLoading(false);
    }
  } catch (error) {
    console.log(error);
    setFollowLoading(false);
  }
}

export default function* userInfoSagas() {
  yield takeLatest(getFollowersAction().type, getFollowersSaga);
  yield takeLatest(getFollowedByAction().type, getFollowedBySaga);
  yield takeLatest(unFollowAction().type, unFollowSaga);
  yield takeLatest(userFollowAction().type, userFollowSaga);
}
