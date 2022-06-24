import { all, fork } from 'redux-saga/effects';
import users from './users';

export default function* root() {
  const sagas = [
    users,
  ];
  yield all(sagas.map(fork));
}