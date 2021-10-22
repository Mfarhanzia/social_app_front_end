import axios from '../../../config/axios';
import { put, takeLatest, select } from 'redux-saga/effects';
import { makeSelectToken } from '../../publicPages/login/redux/selectors';
import {createPostAction, postCreatedAction} from './actions';


function* craetePostSaga(action) {
  const { payload: {formdata, history, setIsLoading, setFormError}} = action;
  try {
    const token = yield select(makeSelectToken());
    const header = {
      Authorization: `jwt ${token}`,
    };
    const response = yield axios.post(
      'posts/',
      formdata,
      { headers: header }
    );
    if (response.status === 201 || response.status === 200) {
      alert("post done")
      history.push("/")
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

export default function* createPostSagas() {
  yield takeLatest(createPostAction().type, craetePostSaga) 
}
