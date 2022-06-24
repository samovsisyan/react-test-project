import {takeLatest, put, call} from 'redux-saga/effects';
import {
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAIL

} from "../actions/users";
import * as api from '../../api';

function* handleGetUsers(action) {
  try {
    const data = yield call(api.getUsers);
    yield put({
      type: USERS_SUCCESS,
      payload: {user: data}
    });
  } catch (e) {
    yield put({
      type: USERS_FAIL,
      message: e.response.data.message || e.message,
    })
  }
}

export default function* watcher() {
  yield takeLatest(USERS_REQUEST, handleGetUsers)
}