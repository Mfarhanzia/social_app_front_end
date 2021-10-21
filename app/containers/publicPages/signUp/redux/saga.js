import { put, takeLatest, select } from 'redux-saga/effects';
import axios from '../../../../config/axios';
import {
    signUpRegisterAction,
} from './actions';


function* signUpRegisterSaga(action) {
  const { payload: {formData, history, setIsLoading, setFormError}} = action;
  try {
    const response = yield axios.post(
      'user/sign_up/',
      formData
    );
    if (response.status === 201 || response.status === 200) {
      setIsLoading(false)
      history.push("/login")
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


export default function* signUpSagas() {
  yield takeLatest(signUpRegisterAction().type, signUpRegisterSaga)
}
