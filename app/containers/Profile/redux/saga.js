import axios from '../../../config/axios';
import { put, takeLatest, select } from 'redux-saga/effects';
import { makeSelectToken } from '../../publicPages/login/redux/selectors';
import {
  getUserInfoAction, setUserInfoAction, updateUserInfoAction, updatePasswordAction,
} from './actions';


function* getUserInfoSaga(action) {
  try {
    const token = yield select(makeSelectToken());
    const header = {
      Authorization: `jwt ${token}`,
    };
    const response = yield axios.get(
      'user/update_profile/',
      { headers: header }
    );
    if (response.status === 201 || response.status === 200) {
      yield put({
        type: setUserInfoAction().type,
        payload: response.data
      });
    }
  } catch (error) {
    console.log(error)
  }
}

function* updateUserInfoSaga(action) {
  const { payload: {formData, history, setIsLoading, setFormError}} = action;
  try {
    const token = yield select(makeSelectToken());
    const header = {
      Authorization: `jwt ${token}`,
    };
    const response = yield axios.put(
      'user/update_profile/',
      formData,
      { headers: header },
    );
    if (response.status === 201 || response.status === 200) {
      alert("profile updated")
      setIsLoading(false)
      yield put({
        type: setUserInfoAction().type,
        payload: response.data
      });
    }
  } catch (error) {
    setIsLoading(false)
    const {response: {data, status}} = error;
    if (status === 400){
      const temp = {}
      Object.keys(data).map(key=>{
        temp[key] = data[key][0]
      })
      setFormError({...temp})
    }
  }
}

function* updatePasswordSaga(action) {
  const { payload: {formData, setIsLoading, setFormError}} = action;
  try {
    const token = yield select(makeSelectToken());
    const header = {
      Authorization: `jwt ${token}`,
    };
    const response = yield axios.put(
      'user/change_password',
      formData,
      { headers: header }
    );
    if (response.status === 201 || response.status === 200) {
      alert("password updated")
      setIsLoading(false)
    }
  } catch (error) {
    console.log(error)
    setIsLoading(false)
    const {response: {data, status}} = error;
    if (status === 400){
      const temp = {}
      Object.keys(data).map(key=>{
        temp[key] = data[key][0]
      })
      setFormError({...temp})
    }
  }
}

export default function* editProfileSagas() {
  yield takeLatest(getUserInfoAction().type, getUserInfoSaga),
  yield takeLatest(updateUserInfoAction().type, updateUserInfoSaga),
  // yield takeLatest(userInfoUpdatedAction().type, userInfoUpdatedSaga)

  // changepassword related sagas
  yield takeLatest(updatePasswordAction().type, updatePasswordSaga)
}
