import { takeEvery, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import types from './types';

function* sagaFetchUser({ res }) {
  try {
    const res = yield call(axios.get, [
      'https://dev-main.bindo.io/api/v4/stores/6862/favorite_tabs/76348/favorite_sections?page=1&per_page=999&with_details=true',
    ]);
    console.log(res);
    yield put({ type: types.userUpdateAuth, payload: res });
  } catch (error) {
    yield put({ type: types.errorFetchFainl, payload: error });
  }
}

export function* watchUsers() {
  yield takeEvery(types.sagaFetchUser, sagaFetchUser);
}

export default function* rootSaga() {
  yield all([watchUsers()]);
}
