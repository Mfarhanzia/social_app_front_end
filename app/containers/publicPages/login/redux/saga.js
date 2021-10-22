import { takeLatest, put } from 'redux-saga/effects';
import axios from '../../../../config/axios';
import {
  loginAction,
  logOutAction,
  loggedOutAction,
  loginSuccessAction,
} from './actions';

function* loginSaga(action) {
  const {
    payload: { formData, history, setIsLoading, setOtherError },
  } = action;
  try {
    const response = yield axios.post('user/login/', formData);
    if (response.status === 200) {
      yield put({
        type: loginSuccessAction().type,
        payload: response.data,
      });
      history.push('/');
    }
  } catch (error) {
    console.log(error);
    setIsLoading(false);
    const {
      response: { data = {}, status = null },
    } = error;
    if (status === 401) {
      setOtherError(data.detail);
    }
  }
}

function* logoutSaga(action) {
  const {
    payload: { history },
  } = action;
  try {
    yield put({
      type: loggedOutAction().type,
    });
    history.push('/login');
  } catch (error) {

    console.log(error);
  }
}

export default function* loginSagas() {
  yield takeLatest(loginAction().type, loginSaga);
  yield takeLatest(logOutAction().type, logoutSaga);
}
