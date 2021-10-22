import axios from '../../../config/axios';
import { put, takeLatest, select } from 'redux-saga/effects';
import { makeSelectToken } from '../../publicPages/login/redux/selectors';
import { getFeedsAction, feedsLoadedAction } from './actions';


function* getFeedsSaga(action) {
    const { payload: { pageNo, setIsLoading } } = action;
    try {
        const token = yield select(makeSelectToken());
        const header = {
            Authorization: `jwt ${token}`,
        };
        const response = yield axios.get(
            `posts/feed?page=${pageNo}`,
            { headers: header }
        );
        if (response.status === 201 || response.status === 200) {
            yield put({
                type: feedsLoadedAction().type,
                payload: response.data,
            });
            setIsLoading(false)
        }
    } catch (error) {
        console.log(error)
        setIsLoading(false)
    }
}

export default function* homePageSagas() {
    yield takeLatest(getFeedsAction().type, getFeedsSaga)
}
