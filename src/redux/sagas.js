import { takeEvery, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import types from './types';

function* sagaFetchUser({ res }) {
  try {
    const res = yield call(axios.get, [
      'https://pixabay.com/api/?key=8089180-a586bdfbeea5884bd5e24a138',
    ]);
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
